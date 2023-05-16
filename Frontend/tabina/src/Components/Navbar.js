import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';
import '../Css/navbar.css'
import tabina from '../Image/tabina.png'
import icon from '../Image/img/recipe/hamburger-menu-icon.png'
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/login');
  }

  useEffect(() => {
    axios.get('/login').then(res => {
      const isAuth = res.data.isLoggedIn;

      setIsLoggedIn(isAuth);
    })
  }, [])

  return (
      <nav className='nav'>
        <img src={tabina}  />
        <div className='btnlist'>
          <Link to="/" className='nav-link'>Home</Link>
          <Link to="/about" className='nav-link'>About</Link>
          <Link to="/contact" className='nav-link'>Contact</Link>
          {isLoggedIn ? <Link to="/myaccount" className='nav-link'>My Account</Link>
          : <button className='nav-link' id = 'button' onClick={handleButtonClick}>Login</button>}
          {/* <button className='nav-link' id = 'button'>Login</button> */}
        </div> 
      </nav>
  );
}

export default Navbar;