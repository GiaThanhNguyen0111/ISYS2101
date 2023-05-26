import React, { useRef } from "react";
import '../Css/footer.css';
import tabina from '../Image/logo/footer-tabina-logo.png'
import fb from '../Image/img/recipe/facebook (1).png'
import ig from '../Image/img/recipe/instagram (1).png'
import { Link } from "react-router-dom";
function Footer() {
  // const myRef = useRef();
  // const y = myRef.current.offsetTop;

  return (
    
    <footer id="footer-id">
      <div className="footer-content-container" >
        <img src={tabina} className="footer-logo"/>
        <div className="footer-column">
          <Link to={`/home`} style={{textDecoration: 'none'}}>
            <h2>Home</h2>
          </Link> 
        </div>
        <div className="footer-column">
          <Link to={`/recipes`} style={{textDecoration: 'none'}}>
            <h2>Recipes</h2>
          </Link> 
          <Link to={`/recipes?mealType=appetizer`}>
            Appetizer
          </Link> 
          <Link to={`/recipes?category=grains`}>
            Grains
          </Link> 
          <Link to={`/recipes?mealType=dessert`}>
            Dessert
          </Link> 
        </div>
        <div className="footer-column">
          <Link to={`/policy`} style={{textDecoration: 'none'}}>
            <h2>About</h2>
          </Link> 
          <Link to='/policy' >Privacy</Link>
          <Link to='/policy' >Policies</Link>
        </div>
        <div className="footer-column">
          <Link to={`/contact`} style={{textDecoration: 'none'}}>
            <h2>Contact</h2>
          </Link> 
          <a href="https://www.facebook.com/tran.thanh.ne/" target="_blank"><img src={fb}/>Facebook</a>
          <a href="https://www.instagram.com/"><img src={ig}/>Instagram</a>
        </div>
      </div>
      <div className="footer-copyright">Copyright c 2023 Group 14</div>
      </footer>
  );
}

export default Footer;