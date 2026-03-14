import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Acoustic Guitar', price: 299 },
  { id: 2, name: 'Electric Keyboard', price: 450 },
  { id: 3, name: 'Drum Kit', price: 799 }
];

function Store() {
  return (
    <div>
      <h1>Music Store</h1>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}

            <Link to={`/store/${product.id}`} style={{marginLeft:'10px'}}>
              View Details
            </Link>

          </li>
        ))}
      </ul>

    </div>
  );
}

export default Store;