import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Products from "./pages/Products";

function App() {
  return (
    <Router>

      <nav>
        <ul>

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/register">Register</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>

        </ul>
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Registration />} />

        <Route path="/login" element={<Login />} />

        <Route path="/products" element={<Products />} />

      </Routes>

    </Router>
  );
}

export default App;