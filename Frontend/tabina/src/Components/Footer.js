import React from "react";
import '../Css/footer.css';
import tabina from '../Image/logo/Tabina.png'

function Footer() {
  return (
    
    <footer>
      <div className="footer-columns" >
        <div className="footer-column">
          <img src= {tabina} className="tabina" />
        </div>
        <div className="footer-column">
          <h3>Home</h3>
          <ul>
            <li>Find your recipe</li>
            <li>Delicious recipe</li>
            <li>Popular dishes</li>
            <li></li>
          </ul>
          
        </div>
        <div className="footer-column">
          <h3>Recipes</h3>
          <ul>
            <li>Mexican</li>
            <li>Italy</li>
            <li>Asian</li>
            <li>Euroupean</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>About</h3>
          <ul>
            <li>Blog</li>
            <li>FAQs</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul className="social-media-icons">
            <li>
              
                <i className="fab fa-facebook-f"></i>
            
            </li>
            <li>
             
                <i className="fab fa-twitter"></i>
        
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;