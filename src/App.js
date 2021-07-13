import './sass/style.scss';
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Banner from './components/Banner';
import Shopping from './components/Shopping';
import Basket from './components/Basket';
import data from './data';
import topData from './topData';
import { useState } from 'react';
import TopShopping from './components/TopShopping';
import Navs from './components/Navs';
import Tv from './components/Tv';
import Footer from './components/Footer';

const App = (props) => {
  const {products} = data;
  const {topProducts} = topData;
  const [cartItems, setCartItems] = useState([]); 
  const onAdd = (product) =>{
    const exist = cartItems.find(x => x.id === product.id);
    if(exist){
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x ))
    }else{
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  }
  const onRemove = (product) =>{
    const exist = cartItems.find((x) =>x.id === product.id);
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }else{
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty - 1} : x ))
    }
  }
  const [shop, setOpenShop] = useState(false);
  const openShop  = () => setOpenShop(!shop)
  
  return (
      <BrowserRouter>
        <Navbar countCartItems = {cartItems.length} openShop={openShop}/>
        <Banner />
        <Shopping onAdd={onAdd} products = {products} />
        <Basket onAdd ={onAdd}
        onRemove={onRemove} cartItems ={cartItems} openShop = {openShop} />
        <TopShopping topProducts ={topProducts} />
        <Navs />
        <Tv />
        <Footer />
      </BrowserRouter>
  );
};

export default App;
