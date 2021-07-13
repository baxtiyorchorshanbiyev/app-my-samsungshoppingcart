import React from 'react';

const Product = (props) => {
  const {product, onAdd} = props;
  return (
    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12">
      <div className="card">
      <div className="card-header">
        <div className="content-card">
        <img src={product.img} className="small" alt="" />
        </div>
      </div>
        <div className="card-body text-center">
        <h3>{product.name}</h3>
      <h4><strong>${product.price}</strong></h4>
      <div>
        <button onClick={() => onAdd(product)}  type="button" className=" btn btn-dark add">Buy Now</button>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Product;