import React from 'react';
import '../Css/page/recipe-detail.css';
import food from '../Image/img/recipe/salmon.jpg';
import salmon from '../Image/img/recipe/IgSalmon.png'
import butter from '../Image/img/recipe/IgButter.png'
import oliveOil from '../Image/img/recipe/IgOliveOil.png'
import parsley from '../Image/img/recipe/IgParsley.png'
import pepper from '../Image/img/recipe/IgPepper.png'
import salt from '../Image/img/recipe/IgSalt.png'
import lemon from '../Image/img/recipe/IgLemon.png'

import {useParams, Link} from "react-router-dom";

import recipesData from "../test-data/recipesData";
import IngredientItem from '../Components/RecipeDetail/IngredientItem';

const RecipeDetail = () => {
    const {recipeId} = useParams()
    const thisRecipe = recipesData.find(rep => rep.id == recipeId)
    const testData = {
        id: 5,
        title: "SAUTÉ BUTTER SALMON",
        image: food,
        rating: 4,
        prepTime: '20 mins',
        cookingTime: '20 to 40 mins',
        difficulty: 'Expert',
        ingredientList: [
            {
                ingredient: {
                    name: 'Salmon',
                    image: salmon,
                    description: 'This is salmon',
                    nutrition: 208
                },
                amount: '180 g'
            },
            {
                ingredient: {
                    name: 'Butter',
                    image: butter,
                    description: 'This is butter',
                    nutrition: 716
                },
                amount: '90 g'
            },
            {
                ingredient: {
                    name: 'Olive Oil',
                    image: oliveOil,
                    description: 'This is olive oil',
                    nutrition: 884
                },
                amount: '30 g'
            },
            {
                ingredient: {
                    name: 'Parsley',
                    image: parsley,
                    description: 'This is parsley',
                    nutrition: 36
                },
                amount: '30 g'
            },
            {
                ingredient: {
                    name: 'Lemon',
                    image: lemon,
                    description: 'This is lemon',
                    nutrition: 28
                },
                amount: '100 g'
            },
            {
                ingredient: {
                    name: 'Black pepper',
                    image: pepper,
                    description: 'This is black pepper',
                    nutrition: 17
                },
                amount: '5 g'
            },
            {
                ingredient: {
                    name: 'Salt',
                    image: salt,
                    description: 'This is salt',
                    nutrition: 0
                },
                amount: '10 g'
            },
        ]
    }

    return (
        <>
        <div className='recipe-detail'>
            <div className='recipe-detail-breadcrumb'>
                <p><Link to={`/`}>Home</Link> &gt; <Link to={`/`}>Recipe</Link> &gt; {thisRecipe.title}</p>
            </div>
            <div className='recipe-detail-content'>
                <div className='recipe-detail-content-left'>
                    <img src = {thisRecipe.image} className='recipe-detail-img' alt={thisRecipe.title}/>
                    <div className='recipe-detail-content-left-ingredients'>
                        <div className='recipe-detail-content-left-ingredients-title'>
                            <span className='recipe-detail-content-left-ingredients-title-head'>Ingredients</span>
                            <span className='recipe-detail-content-left-ingredients-title-number'>{thisRecipe.ingredientList.length}</span>
                        </div>
                        <div className='recipe-detail-content-left-ingredients-list'>
                            {thisRecipe.ingredientList.map((item) => (
                                <IngredientItem item = {item} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='recipe-detail-content-right'>
                    <div className='recipe-detail-content-right-title'>
                        <h2></h2>
                        <div className='recipe-detail-content-right-title-stat'>
                            <div className='recipe-detail-content-right-title-stat-rating'>
                                {/* Rating  */}
                            </div>
                            <div className='recipe-detail-content-right-title-stat-level'>
                                <span></span>
                                {/* Level  */}
                            </div>
                        </div>
                    </div>
                    <div className='recipe-detail-content-right-info'>
                        <div className='recipe-detail-content-right-info-time'>
                            {/* Time  */}
                        </div>
                        <div className='recipe-detail-content-right-info-calo'>
                        
                        </div>
                    </div>
                    <div className='recipe-detail-content-right-instructions'>
                    
                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}


export default RecipeDetail;