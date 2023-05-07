import React from "react";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "../../Css/popularRecipe.css"; //import component-specific CSS
import StarRatings from 'react-star-ratings';
import RecipeItem from "../RecipeItem";
import { Link } from "react-router-dom";

import recipesData from "../../test-data/recipesData";

const PopularRecipe = () => {
  
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
          gap: "6rem",
          padding: '4rem',
          breakpoints: {
            1200: {
              perPage: 2,
              gap: "5rem",
            },
            820: {
              perPage: 1,
            },
          },
        }}
      >
        {recipesData.map((recipe) => (

          <SplideSlide key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}><RecipeItem recipe = {recipe}/></Link>
          </SplideSlide>
        ))}
      </Splide>

    </div>
  );
};

export default PopularRecipe;