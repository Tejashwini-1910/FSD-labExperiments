import React from "react";

function Products() {

  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 }
  ];

  return (
    <div>

      <h1>Product Information</h1>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Products;