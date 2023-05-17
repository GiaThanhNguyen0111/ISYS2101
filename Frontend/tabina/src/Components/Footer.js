import React from "react";
import '../Css/footer.css';
import tabina from '../Image/logo/footer-tabina-logo.png'
import fb from '../Image/img/recipe/facebook (1).png'
import ig from '../Image/img/recipe/instagram (1).png'
import { Link } from "react-router-dom";
function Footer() {
  return (
    
    <footer>
      <div className="footer-content-container" >
        <img src={tabina} className="footer-logo"/>
        <div className="footer-column">
          <h2>Home</h2>
        </div>
        <div className="footer-column">
          <h2>Recipes</h2>
          <a>Mexican</a>
          <a>Italian</a>
          <a>Asian</a>
        </div>
        <div className="footer-column">
          <h2>About</h2>
          <Link to='/policy' >Privacy</Link>
          <Link to='/policy' >Policies</Link>
        </div>
        <div className="footer-column">
          <h2>Contact</h2>
          <a href="https://www.facebook.com/tran.thanh.ne/" target="_blank"><img src={fb}/>Facebook</a>
          <a><img src={ig}/>Instagram</a>
        </div>
      </div>
      <div className="footer-copyright">Copyright c 2023 Group 14</div>
      </footer>
  );
}

export default Footer;