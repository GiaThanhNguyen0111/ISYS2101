import React, { useState, useEffect } from "react";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "../../Css/page/home/popularRecipe.css"; //import component-specific CSS
import RecipeItem from "../RecipeItem";
import { Link } from "react-router-dom";
import axios from 'axios';

import recipesData from "../../test-data/recipesData";

const PopularRecipe = () => {
  
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    axios.get(`https://damp-anchorage-45936.herokuapp.com/recipe`).then(response => {
      setPopularRecipes(response.data.recipes.slice(0, 9));
    });
  }, []);

  console.log(popularRecipes);

  return (
    <div className="popular-recipe-container">

      <h2>Popular Recipes</h2>

      <Splide
        options={{
          type: "slide",
          rewind: true,
          arrows: false,
          pagination: false,
          perPage: 3,
          perMove: 1,
          breakpoints: {
            1330: {
              perPage: 2,
            },
            860: {
              perPage: 1,
            },
          },
        }}
      >
        {popularRecipes.map((recipe) => (

          <SplideSlide key={recipe._id}>
            <Link to={`/recipes/${recipe._id}`} state={{ recipe }}>
              <RecipeItem recipe = {recipe} />
            </Link>
          </SplideSlide>
        ))}
      </Splide>

    </div>
  );
};

export default PopularRecipe;