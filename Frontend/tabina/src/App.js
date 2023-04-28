import React from 'react';
import Chefcard from './Components/Chefcard';
import Loginform from './Components/Login/Loginform';
import Registerform from './Components/Login/Registerform';
import RecipeItem from './Components/RecipeItem';
import './Css/app.css';
import PopularRecipe from './Components/PopularRecipe';
import Hero from './Components/Hero';
import MoreThanRecipe from './Components/MoreThanRecipe';
import StarColor from './Components/StarColor';
import StarBlank from './Components/StarBlank';
import Navbar from './Components/Navbar';


const App = () => {
  return (
    <div>
      <>
      <Navbar/>
    <Hero />
      <PopularRecipe />
      <MoreThanRecipe/>
      <Chefcard/>
    </>
    </div>
  );
};

export default App;