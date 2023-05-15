import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../Css/navbar.css'
import tabina from '../Image/tabina.png'
import icon from '../Image/img/recipe/hamburger-menu-icon.png'
const Navbar = () => {
  function myFunction() {
    var x = document.getElementById("btnlist");
    if (x.className === "btnlist") {
      x.className += " responsive";
    } else {
      x.className = "btnlist";
    }
  }

  return (
      <nav className='nav'>
        <div className='logo-and-icon'>
          <img src={tabina}  className='nav-logo'/>
          <img src={icon} className='responsive-btn' onClick={myFunction}/>
        </div>
        <div className='btnlist' id='btnlist'>
          <Link to="/" className='nav-link' id='nav-link'>Home</Link>
          <Link to="/about" className='nav-link' id='nav-link'>About</Link>
          <Link to="/contact" className='nav-link' id='nav-link'>Contact</Link>
          <button className='nav-link' id = 'login-button'>Login</button>
        </div> 
      </nav>
  );
}

export default Navbar;