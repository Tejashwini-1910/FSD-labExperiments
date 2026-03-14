import React, { useState } from "react";
import LeaveBalance from "./components/LeaveBalance";
import ApplyLeave from "./components/ApplyLeave";

const App = () => {
  const [leaveBalance, setLeaveBalance] = useState({
    casual: 12,
    medical: 10,
  });

  const applyLeave = (type, days) => {
    if (leaveBalance[type] >= days) {
      setLeaveBalance({
        ...leaveBalance,
        [type]: leaveBalance[type] - days,
      });
      alert("Leave applied successfully!");
    } else {
      alert("Not enough leave balance!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Leave Management System</h1>
      <LeaveBalance balance={leaveBalance} />
      <ApplyLeave onApply={applyLeave} />
    </div>
  );
};

export default App;