import React from 'react';
import TopProducts from './TopProducts';
const TopShopping = (props) => {
    const {topProducts} = props;
  return (
    <div className="container  top__products">
    <h1>Top Products</h1>
    {topProducts.map((topProducts) =>(
            <TopProducts  key={topProducts.id} topProducts ={topProducts} ></TopProducts>
          ))}
      
    </div>
  );
};

export default TopShopping;