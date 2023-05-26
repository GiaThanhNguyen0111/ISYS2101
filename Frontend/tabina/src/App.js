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
import Tag from './Components/Tag';
import PolicyPage from './Pages/PoliciesPage'
import AccountSecurity from './Components/MyAccount/AccountSecurity';
import UploadRecipeForm from './Components/UploadRecipe/UploadRecipeForm';
import Posts from './Pages/Posts';
import PostItem from './Components/Posts/PostItem';
import ContactPage from './Pages/ContactPage';


const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<RecipeDetail />} />
      </Routes> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Loginform />} />
        <Route path="/register" element={<Registerform />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetail />} />
        {/* <Route path='/search' element={<Filtertab/>} /> */}
        <Route path='/recipes' element={< Filtertab/>} />
        <Route path='/myaccount' element={< MyAccount/>}> 
          <Route path="/myaccount/accpersonalInfo" element={<PersonalInfo />} />
          {/* <Route path='/myaccount/accsecurity' element={< AccountSecurity/>}/> */}
        </Route>
        <Route path="/not-found" element={<NotFound />} />
        <Route path='/policy' element={<PolicyPage />}/>
        <Route path='/contact' element={<ContactPage />}/>

        <Route path='/posts' element={<Posts />}/>
        <Route path='/upload' element={<UploadRecipeForm />}/>

        {/* catch all wrong route */}
        <Route
            path="*"
            element={<Navigate to="/not-found" replace />}
        />
 
        {/* route for component test */}
        <Route path="/component-test" element={<PostItem />} />
      </Routes>
    </>
  );
};

export default App;