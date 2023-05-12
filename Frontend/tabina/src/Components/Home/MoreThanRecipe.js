import React from 'react'
import Shape from '../../Image/img/recipe/Curve Shape (MoreThanRecipe).png';
import Meal1 from '../../Image/img/recipe/Meal1.png';
import Meal2 from '../../Image/img/recipe/Meal2.png';
import requirement from '../../Image/img/recipe/requirement.png';
import people from '../../Image/img/recipe/people.png';
import dashboard from '../../Image/img/recipe/dashboard.png';
import cooking from '../../Image/img/recipe/cooking.png';
import recipe from '../../Image/img/recipe/recipe.png';
import fastFood from '../../Image/img/recipe/fast-food.png';
import "../../Css/page/home/moreThanRecipe.css";


function MoreThanRecipe() {
  return (
    <div className='mtr-container'>
      <div className='mtr-left-side'>
        <div className='mtr-left-background'></div>
        <img src={Shape} className='mtr-shape' alt=''/>
        <img src={Meal1} className='mtr-bowl1' alt=''/>
        <img src={Meal2} className='mtr-bowl2'alt=''/>
      </div>

      <div className='mtr-right-side'>
        <h3 className='mtr-title'>We Are More Than A Recipe Web Application</h3>
        <p className='mtr-description'>While being the best option for you when it comes to create best dishes from anywhere in the planet, Tabina is also the #1 leading food community web application with 10.000+ users.</p>

        <ul className='mtr-list'>
          <li>Cohesive instruction<img src={requirement} alt='icon'/></li> 
          <li>Detailed super chefs food<img src={cooking} alt='icon'/></li>
          <li>Sharing community<img src={people} alt='icon'/></li>
          <li>1000+ recipes database<img src={recipe} alt='icon'/></li>
          <li>Pleasing interface<img src={dashboard} alt='icon'/></li>
          <li>Diverse food labels<img src={fastFood} alt='icon'/></li>
        </ul>

        <button className='mtr-about-btn'>ABOUT</button>
      </div>
    </div>
  )
}

export default MoreThanRecipe