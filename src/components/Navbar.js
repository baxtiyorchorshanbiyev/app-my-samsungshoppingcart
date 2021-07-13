import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import {FiShoppingCart} from 'react-icons/fi';
const Navbar = (props) => {
  const{countCartItems, openShop} = props;
  const [ click, setClick] = useState(false);
  const handleClick = () =>setClick(!click);
  const closeMobileMenu = () => setClick(false);
  

  return (
      <nav className="navbar mx-0 px-0">
        <div className="container px-0 navbar-container">
          <Link to="/" className="navbar-logo mx-2">
            <img src="./images/logo.svg" alt="" />
          </Link>
          <div className="navbar-content">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/mobil" className="nav-link">Mobil aloqalar</Link>
            </li>
            <li className="nav-item">
              <Link to="/tv" className="nav-link">TV va Audio</Link>
            </li>
            <li className="nav-item">
              <Link to="/uy" className="nav-link">Uy uchun</Link>
            </li>
            <li className="nav-item">
              <Link to="/it" className="nav-link">IT</Link>
            </li>
          </ul>
          <div className="menu-icon">
          <button type="button" className="btn btn-shop" > <FiShoppingCart /> {countCartItems ? (
            <span class="badge  badge-danger ml-1">
          {countCartItems}
          </span>
          ) : "" } {''}</button>
          <button type="button" className="btn btn-light mx-2 sign-in"><Link to="/sign-in" className="sign-link">Sign In</Link></button>
          <button type="button" className="btn burger" onClick={handleClick}>{click ? <FaTimes /> : <FaBars /> }</button>
          </div>
          </div>
          
        </div>
        <ul className={click ?'mobile-nav-menu active' : 'moible-nav-menu'}>
            <li className="nav-item">
              <Link to="/mobil" className="nav-link" onClick={closeMobileMenu}>Mobil aloqalar</Link>
            </li>
            <li className="nav-item">
              <Link to="/tv" className="nav-link" onClick={closeMobileMenu}>TV va Audio</Link>
            </li>
            <li className="nav-item">
              <Link to="/uy" className="nav-link" onClick={closeMobileMenu}>Uy uchun</Link>
            </li>
            <li className="nav-item">
              <Link to="/it" className="nav-link" onClick={closeMobileMenu}>IT</Link>
            </li>
            <li className="nav-item">
            <button type="button"  onClick={closeMobileMenu} className="btn btn-light mx-2 mobile-sign-in"><Link to="/sign-in" className="mobile-sign-link">Sign In</Link></button>
            </li>
          </ul> 
      </nav>
  );
};

export default Navbar;