import React from 'react';
import '../Css/page/recipe-detail.css';
import food from '../Image/img/recipe/salmon.jpg';
import {useParams, Link} from "react-router-dom";

import recipesData from "../test-data/recipesData";

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
    }

    return (
        <>
        <div className='recipe-detail'>
            <div className='recipe-detail-breadcrumb'>
                <p><Link to={`/`}>Home</Link> &gt; <Link to={`/`}>Recipe</Link> &gt; {thisRecipe.title}</p>
            </div>
            <div className='recipe-detail-content'>
                <div className='recipe-detail-content-left'>
                    <img src = {thisRecipe.image} className='recipe-item-img recipe-detail-img' alt={thisRecipe.title}/>
                    <div className='recipe-detail-content-left-ingredients'>
                        <div className='recipe-detail-content-left-ingredients-title'>

                        </div>
                        <div className='recipe-detail-content-left-ingredients-list'>
                            
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