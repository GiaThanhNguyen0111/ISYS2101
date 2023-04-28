import React from 'react';
import '../Css/recipeItem.css'
import food from '../Image/img/recipe/salmon.jpg'
import StarColor from './StarColor';
import StarBlank from './StarBlank';

const RecipeItem = () => {
    const recipe = {
        id: 1,
        title: "SAUTÉ BUTTER SALMON",
        image: food,
        rating: 4,
        prepTime: '20 mins',
        cookingTime: '20 to 40 mins',
        difficulty: 'Expert',
    }


    return (
        <>
        <div className='recipe-item'>
            <img src = {recipe.image} className='recipe-item-img' alt={recipe.title}/>
            <h3>{recipe.title}</h3>
            <div className='recipe-item-rating'>
            {
                [
                    ...Array(recipe.rating),
                ].map((value) => (
                    <StarColor />
                ))
            }
            {
                [
                    ...Array(5 - recipe.rating),
                ].map((value) => (
                    <StarBlank />
                ))
            }
            </div>
            
            <div className='recipe-item-desc-line'>
                <span className='recipe-item-desc-line-1'>
                    Preparation time:
                </span>
                <span className='recipe-item-desc-line-2'>
                    {recipe.prepTime}
                </span>
            </div>
            <div className='recipe-item-desc-line'>
                <span className='recipe-item-desc-line-1'>
                    Cooking time:
                </span>
                <span className='recipe-item-desc-line-2'>
                    {recipe.cookingTime}
                </span>
            </div>
            <div className='recipe-item-desc-line'>
                <span className='recipe-item-desc-line-1'>
                    Difficulty:
                </span>
                <span className='recipe-item-desc-line-2'>
                    {recipe.difficulty}
                </span>
            </div>
        </div>
        </>
    )
}


export default RecipeItem;