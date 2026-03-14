import React, { useState } from "react";
import "./App.css";

function App() {

  const [candidates, setCandidates] = useState([
    { name: "Candidate A", votes: 0 },
    { name: "Candidate B", votes: 0 },
    { name: "Candidate C", votes: 0 }
  ]);

  const handleVote = (index) => {
    const newCandidates = [...candidates];
    newCandidates[index].votes += 1;
    setCandidates(newCandidates);
  };

  const totalVotes = candidates.reduce(
    (sum, candidate) => sum + candidate.votes,
    0
  );

  const resetPoll = () => {
    const resetCandidates = candidates.map(candidate => ({
      ...candidate,
      votes: 0
    }));
    setCandidates(resetCandidates);
  };

  return (
    <div className="voting-app">
      <h1>Voting Application</h1>
      <h2>Which candidate do you support?</h2>

      <div className="candidates">

        {candidates.map((candidate, index) => (
          <div key={index} className="candidate">

            <h3>{candidate.name}</h3>

            <button onClick={() => handleVote(index)}>
              Vote
            </button>

            <div className="result-bar">

              <span>
                {candidate.votes} votes (
                {totalVotes > 0
                  ? ((candidate.votes / totalVotes) * 100).toFixed(1)
                  : 0}
                %)
              </span>

              <div
                className="bar-fill"
                style={{
                  width: `${
                    totalVotes > 0
                      ? (candidate.votes / totalVotes) * 100
                      : 0
                  }%`
                }}
              ></div>

            </div>

          </div>
        ))}

      </div>

      <button className="reset-btn" onClick={resetPoll}>
        Reset Poll
      </button>

    </div>
  );
}

export default App;