import React from 'react';
import Chefcard from './Components/Chefcard';
import Loginform from './Components/Login/Loginform';
import Registerform from './Components/Login/Registerform';
import PopularRecipe from './Components/PopularRecipe';
import Hero from './Components/Hero';
import MoreThanRecipe from './Components/MoreThanRecipe';


const App = () => {
  return (
    <div>
      <Hero />
      <PopularRecipe />
      <MoreThanRecipe />
    </div>
  );
};

export default App;