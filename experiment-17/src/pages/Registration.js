import React from "react";

function Registration() {
  return (
    <div>
      <h1>Registration Page</h1>

      <form>
        <div>
          <label>Email:</label>
          <input type="email" required />
        </div>

        <div>
          <label>Password:</label>
          <input type="password" required />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;