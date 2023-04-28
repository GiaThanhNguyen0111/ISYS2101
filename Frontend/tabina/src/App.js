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
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import RecipeDetail from './Components/RecipeDetail';

const App = () => {
  return (
    <div>
      <>
    {/* <Hero />
      <PopularRecipe />
      <MoreThanRecipe  /> */}
    {/* <RecipeItem /> */}
    </>

    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/detail" element={<RecipeDetail />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;