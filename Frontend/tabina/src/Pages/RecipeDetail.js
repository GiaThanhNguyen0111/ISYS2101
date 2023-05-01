import React from 'react';
import RecipeItem from '../Components/RecipeItem';
import '../Css/page/recipe-detail.css';
import food from '../Image/img/recipe/salmon.jpg'

const RecipeDetail = () => {
    const recipeData = [
        {
            id: 1,
            title: "SAUTÉ BUTTER SALMON",
            image: food,
            rating: 4,
            prepTime: '20 mins',
            cookingTime: '20 to 40 mins',
            difficulty: 'Expert',
        },
      ];
    return (
        <><h1>This is recipe Detail</h1>
        {recipeData.map((recipe) => (
        <RecipeItem  recipe = {recipe}/>
        ))}
        </>
    )
}


export default RecipeDetail;