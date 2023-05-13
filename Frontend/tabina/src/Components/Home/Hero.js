import React from 'react';
import '../../Css/page/home/hero.css';
import bookImg from '../../Image/img/recipe/Hero book image.png';
import curveShape from '../../Image/img/recipe/Curve Shape (Hero).png';

function Hero() {
  return (
    <div className="hero-wrapper">
      <div className='hero-background'></div>

      <div className="hero-left">
        <h1 className="hero-title">The best food for everyone</h1>
        <p className="hero-subtitle">The Mina cooking community is nourished with famous chefs and validated experts, get recipes and bring home tasty meals.</p>
        <div className='hero-buttons'>
          <button className="hero-cta" id='get-recipe'>GET RECIPES</button>
          <button className="hero-cta" id='share-recipe'>SHARE RECIPES</button>
        </div>
      </div>

      <div className='hero-right'>
        <img src={curveShape} className='hero-curve' alt='curve'/>
        <img src={bookImg} className='hero-img' alt='img'/>
      </div>
      

    </div>
  );
}

export default Hero;