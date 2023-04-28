import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../Css/navbar.css'
import tabina from '../Image/tabina.png'
const Navbar = () => {
  return (
    <Router>
      <nav className='navigationbar'>
      <img className='tbnlogo' src={tabina}  />
      
       <div className='btnlist'>
       
       

       <Link to="/" className='nav-link'>Home</Link>
    
    <Link to="/about" className='nav-link'>About</Link>
 
    <Link to="/contact" className='nav-link'>Contact</Link>
 
  <button className='nav-link' id = 'button-login'>LOGIN</button>
       </div>
          
        
        
        
        
      </nav>

    </Router>
  );
}

export default Navbar;