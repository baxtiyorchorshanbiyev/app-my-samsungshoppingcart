import React, {useState} from 'react';

const Basket = (props) => {
  const {cartItems, onAdd, onRemove, openShop} = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalPrice = itemsPrice;
  console.log(openShop);
  return (
      <div className={'container'}>
            <div>{cartItems.length === 0 && <div className="border p-5">Cart is Empty</div>}</div>
        {cartItems.map((item) =>(
          <div className="row">
            <div className="col-lg-12">
              <div key={item.id} className="basket border p-2">
              <div className="basket1 d-flex">
              <h5>{item.name}</h5>
                <div>
                <button onClick={() => onAdd(item)} className="btn mx-4 btn-dark add-product"> + </button>
                <button onClick={() => onRemove(item)} className="btn remove-product"> - </button>
                </div>
              </div>
                <div className=" basket2 d-flex align-items-center">
                <div className="total mx-3">
                  <strong>
                  {item.qty} * ${item.price}
                  </strong>
              </div>
              {cartItems.length !== 0 && (
            <div className="ml-4">
            <p className="mb-0"><strong>Total price</strong></p>
            <h4 className="mb-0">${totalPrice}</h4>
            </div>  
                  )}
                  </div>
              </div>
            </div>
          </div>
        ))}
      
      </div>
  );
};

export default Basket;