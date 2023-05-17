import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';
import '../Css/navbar.css'
import tabina from '../Image/tabina.png'
import icon from '../Image/img/recipe/hamburger-menu-icon.png'
const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  function myFunction() {
    var x = document.getElementById("btnlist");
    if (x.className === "btnlist") {
      x.className += " responsive";
    } else {
      x.className = "btnlist";
    }
  };


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
        <div className='logo-and-icon'>
          <img src={tabina}  className='nav-logo'/>
          <img src={icon} className='responsive-btn' onClick={myFunction}/>
        </div>
        <div className='btnlist' id='btnlist'>
          <Link to="/" className='nav-link' id='nav-link'>Home</Link>
          <Link to="/policy" className='nav-link' id='nav-link'>About</Link>
          <Link to="/contact" className='nav-link' id='nav-link'>Contact</Link>
          {isLoggedIn ? <Link to="/myaccount/accpersonalinfo" className='nav-link'>My Account</Link>
          : <button className='nav-link' id = 'login-button' onClick={handleButtonClick}>Login</button>}
          {/* <button className='nav-link' id = 'button'>Login</button> */}
        </div>
      </nav>
      ); 
}

export default Navbar;