import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/store">Store</Link> |{" "}
          <Link to="/cart">Cart</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/store" element={<Store />} />

          <Route
            path="/store/:productId"
            element={<ProductDetail addToCart={addToCart} />}
          />

          <Route path="/cart" element={<Cart cart={cart} />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;