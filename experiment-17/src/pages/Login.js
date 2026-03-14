import React from "react";

function Login() {
  return (
    <div>
      <h1>Login Page</h1>

      <form>
        <div>
          <label>Email:</label>
          <input type="email" required />
        </div>

        <div>
          <label>Password:</label>
          <input type="password" required />
        </div>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;