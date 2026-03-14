import React from "react";
import { useParams, Link } from "react-router-dom";

const products = {
  1: {
    id: 1,
    name: "Acoustic Guitar",
    description: "Mahogany acoustic guitar",
    price: 299
  },
  2: {
    id: 2,
    name: "Electric Keyboard",
    description: "88 key electric keyboard",
    price: 450
  },
  3: {
    id: 3,
    name: "Drum Kit",
    description: "5 piece drum kit",
    price: 799
  }
};

function ProductDetail({ addToCart }) {

  const { productId } = useParams();

  const product = products[productId];

  if (!product) return <h2>Product not found</h2>;

  return (
    <div>

      <h1>{product.name}</h1>

      <p>{product.description}</p>

      <p>Price: ${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>

      <br /><br />

      <Link to="/store">Back to Store</Link>

    </div>
  );
}

export default ProductDetail;