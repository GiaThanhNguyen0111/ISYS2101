import React from 'react';
import '../Css/hero.css';
import bookImg from '../Image/Hero book image.png'

function Hero() {
  return (
    <div className="hero-wrapper">

      <div className="hero-left">
        <h1 className="hero-title">The best food for everyone</h1>
        <p className="hero-subtitle">The Mina cooking community is nourished with famous chefs and <br></br>validated experts, get recipes and bring home tasty meals.</p>
        <div className='hero-buttons'>
          <button className="hero-cta" id='get-recipe'>GET RECIPES</button>
          <button className="hero-cta" id='share-recipe'>SHARE RECIPES</button>
        </div>
      </div>

      <div className='hero-right'>
       <img src={bookImg} className='hero-img' alt='img'/>
      </div>
      

    </div>
  );
}

export default Hero;