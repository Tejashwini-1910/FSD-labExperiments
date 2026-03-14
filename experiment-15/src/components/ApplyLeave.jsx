import React, { useState } from "react";

const ApplyLeave = ({ onApply }) => {
  const [type, setType] = useState("casual");
  const [days, setDays] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onApply(type, Number(days));
  };

  return (
    <div>
      <h2>Apply Leave</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Leave Type:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="casual">Casual Leave</option>
            <option value="medical">Medical Leave</option>
          </select>
        </label>
        <br /><br />

        <label>
          Number of Days:
          <input
            type="number"
            min="1"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
        </label>
        <br /><br />

        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default ApplyLeave;