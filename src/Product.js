// Product.js

import React from 'react';

function Product(props) {
  return (
    <div style={{
      border: '1px solid black',
      padding: '1rem',
      marginBottom: '1rem',
    }}>
      <h2 style={{
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
      }}>{props.title}</h2>
      <p style={{
        fontSize: '1rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
      }}>Price: {props.price}</p>
      <p style={{
        fontSize: '0.9rem',
      }}>{props.description}</p>
    </div>
  );
}

export default Product;

