import React from "react";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "../../Css/popularRecipe.css"; //import component-specific CSS
import StarRatings from 'react-star-ratings';
import RecipeItem from "../RecipeItem";

const PopularRecipe = () => {
  const recipeData = [
    {
      id: 1,
      title: "Spicy Chicken Pasta",
      image: "https://source.unsplash.com/800x600/?chicken,pasta",
      rating: 5,
      prepTime: '20 mins',
      cookingTime: '20 to 40 mins',
      difficulty: 'Intermediate',
    },
    {
      id: 2,
      title: "Cheeseburger Sliders",
      image: "https://source.unsplash.com/800x600/?burger,sliders",
      rating: 4,
      prepTime: '18 mins',
      cookingTime: '20 to 60 mins',
      difficulty: 'Expert',
    },
    {
      id: 3,
      title: "Chocolate Chip Cookies",
      image: "https://source.unsplash.com/800x600/?cookies,chocolate",
      rating: 4,
      prepTime: '10 mins',
      cookingTime: '30 mins',
      difficulty: 'Beginner',
    },
    {
      id: 4,
      title: "Chocolate Chip Cookies",
      image: "https://source.unsplash.com/800x600/?cookies,chocolate",
      rating: 3,
      prepTime: '20 mins',
      cookingTime: '20 to 40 mins',
      difficulty: 'Intermediate',
    },
  ];

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
        {recipeData.map((recipe) => (

          <SplideSlide key={recipe.id}>
            {/* <div className="recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <StarRatings 
                rating={recipe.rating}
                starDimension="2.5rem"
              />
              <p><span className="text">Preparation time:</span> <span class="bolded">{recipe.prepTime}</span></p>
              <p><span className="text">Cooking time:</span> <span class="bolded">{recipe.cookingTime}</span></p>
              <p><span className="text">Difficulty:</span> <span class="bolded">{recipe.difficulty}</span></p>
            </div> */}
            <RecipeItem recipe = {recipe}/>
          </SplideSlide>
        ))}
      </Splide>

    </div>
  );
};

export default PopularRecipe;