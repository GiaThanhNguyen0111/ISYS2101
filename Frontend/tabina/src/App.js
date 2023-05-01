import React from 'react';
import './Css/app.css';
import PopularRecipe from './Components/PopularRecipe';
import Hero from './Components/Hero';
import MoreThanRecipe from './Components/MoreThanRecipe';
import StarColor from './Components/StarColor';
import StarBlank from './Components/StarBlank';


const App = () => {
  return (
    <div>
      <>
    {/* <Hero />
      <PopularRecipe />
      <MoreThanRecipe  /> */}
    <RecipeItem />
    </>
  );
};

export default App;