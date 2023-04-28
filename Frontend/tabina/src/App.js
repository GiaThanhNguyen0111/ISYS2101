import React from 'react';
import './Css/app.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import RecipeDetail from './Pages/RecipeDetail';
import Home from './Pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
};

export default App;