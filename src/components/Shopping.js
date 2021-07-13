import React from 'react';
import Product from './Product';
const Shopping = (props) => {
const {products, onAdd} = props;
  return (
    <div className="container">
      <h1 className="product-title">Products</h1>
      <div className="row">
      {products.map((product) =>(
            <Product  key={product.id} product ={product} onAdd={onAdd}></Product>
          ))}
      </div>
    </div>
  );
};

export default Shopping;