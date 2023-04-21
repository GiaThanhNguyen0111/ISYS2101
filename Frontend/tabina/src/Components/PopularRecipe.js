import React from "react";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "../Css/popularRecipe.css"; //import component-specific CSS

const PopularRecipe = () => {
  const recipeData = [
    {
      id: 1,
      title: "Spicy Chicken Pasta",
      image: "https://source.unsplash.com/800x600/?chicken,pasta",
      description: "A delicious pasta dish with a spicy kick!",
    },
    {
      id: 2,
      title: "Cheeseburger Sliders",
      image: "https://source.unsplash.com/800x600/?burger,sliders",
      description: "Miniature cheeseburgers that are perfect for a party!",
    },
    {
      id: 3,
      title: "Chocolate Chip Cookies",
      image: "https://source.unsplash.com/800x600/?cookies,chocolate",
      description: "A classic cookie recipe that everyone loves.",
    },
    {
      id: 4,
      title: "Chocolate Chip Cookies",
      image: "https://source.unsplash.com/800x600/?cookies,chocolate",
      description: "A classic cookie recipe that everyone loves.",
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
            750: {
              perPage: 1,
            },
          },
        }}
      >
        {recipeData.map((recipe) => (

          <SplideSlide key={recipe.id}>
            <div className="recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
            </div>
          </SplideSlide>
          
        ))}
      </Splide>

    </div>
  );
};

export default PopularRecipe;