import React from 'react';
import './Css/app.css';
import Home from './Pages/Home';

const App = () => {
  return (
    <div>
      <Home />
      <>
    {/* <Hero />
      <PopularRecipe />
      <MoreThanRecipe  /> */}
    <RecipeItem />
    </>
    </div>
  );
};

export default App;