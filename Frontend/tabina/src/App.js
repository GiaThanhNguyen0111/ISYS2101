import React from 'react';
import './Css/app.css';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route
} from 'react-router-dom';
import RecipeDetail from './Pages/RecipeDetail';
import Home from './Pages/Home';
import LevelLastBlank from './Components/RecipeDetail/LevelLastBlank';
import Filtertab from './Components/Searchpage';
import NutritionItem from './Components/RecipeDetail/NutritionItem';
import Registerform from './Components/Login/Registerform';
import Loginform from './Components/Login/Loginform';
import MyAccount from './Pages/MyAccount';
import PersonalInfo from './Components/MyAccount/PersonalInfo';
import NotFound from './Pages/NotFound';


const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<RecipeDetail />} />
      </Routes> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Loginform />} />
        <Route path="/register" element={<Registerform />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetail />} />
        <Route path='/search' element={<Filtertab/>} />
        <Route path="/component-test" element={<NutritionItem />} />
        <Route path='/filter' element={< Filtertab/>} />
        <Route path='/myaccount' element={< MyAccount/>} />
        <Route path="/accpersonalInfo" element={<PersonalInfo />} />
        <Route path="/not-found" element={<NotFound />} />

        {/* catch all wrong route */}
        <Route
            path="*"
            element={<Navigate to="/not-found" replace />}
        />
      </Routes>
    </>
  );
};

export default App;