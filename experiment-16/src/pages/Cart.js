import React from "react";

function Cart({ cart }) {

  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div>

      <h1>Your Cart</h1>

      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Cart;