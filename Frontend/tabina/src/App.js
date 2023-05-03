import React from 'react';
import './Css/app.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import RecipeDetail from './Pages/RecipeDetail';
import Home from './Pages/Home';
import Searchbar from './Components/Searchbar';
import LevelLastBlank from './Components/RecipeDetail/LevelLastBlank';
import Filtertab from './Components/Filtertab';

const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<RecipeDetail />} />
      </Routes> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetail />} />
        <Route path='/search' element={<Searchbar/>} />
        <Route path="/component-test" element={<LevelLastBlank />} />
        <Route path='/filter' element={< Filtertab/>} />
      </Routes>
    </>
  );
};

export default App;