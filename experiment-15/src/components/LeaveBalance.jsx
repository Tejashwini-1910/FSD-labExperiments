import React from "react";

const LeaveBalance = ({ balance }) => {
  return (
    <div>
      <h2>Available Leave Balance</h2>
      <ul>
        <li>Casual Leave: {balance.casual} days</li>
        <li>Medical Leave: {balance.medical} days</li>
      </ul>
    </div>
  );
};

export default LeaveBalance;