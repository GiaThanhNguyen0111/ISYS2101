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
import SearchBar from './Components/Searchbar';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <>
      <SearchBar/>
    </>
    </div>
  );
};

export default App;