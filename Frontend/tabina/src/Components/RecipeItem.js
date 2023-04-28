import React from 'react';
import '../Css/recipeItem.css'
import food from '../Image/img/recipe/salmon.jpg'
import StarColor from './StarColor';
import StarBlank from './StarBlank';

const RecipeItem = (props) => {
    return (
        <>
        <div className='recipe-item'>
            <img src = {props.recipe.image} className='recipe-item-img' alt={props.recipe.title}/>
            <h3>{props.recipe.title}</h3>
            <div className='recipe-item-rating'>
            {
                [
                    ...Array(props.recipe.rating),
                ].map((value) => (
                    <StarColor />
                ))
            }
            {
                [
                    ...Array(5 - props.recipe.rating),
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
                    {props.recipe.prepTime}
                </span>
            </div>
            <div className='recipe-item-desc-line'>
                <span className='recipe-item-desc-line-1'>
                    Cooking time:
                </span>
                <span className='recipe-item-desc-line-2'>
                    {props.recipe.cookingTime}
                </span>
            </div>
            <div className='recipe-item-desc-line'>
                <span className='recipe-item-desc-line-1'>
                    Difficulty:
                </span>
                <span className='recipe-item-desc-line-2'>
                    {props.recipe.difficulty}
                </span>
            </div>
        </div>
        </>
    )
}


export default RecipeItem;