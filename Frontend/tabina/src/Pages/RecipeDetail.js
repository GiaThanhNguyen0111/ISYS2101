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
import StarColor from '../Components/StarColor';
import StarBlank from '../Components/StarBlank';
import NutritiontItem from '../Components/RecipeDetail/NutritionItem';
import LevelColor from '../Components/RecipeDetail/LevelColor';
import LevelStartColor from '../Components/RecipeDetail/LevelStartColor';
import LevelLastColor from '../Components/RecipeDetail/LevelLastColor';
import LevelLastBlank from '../Components/RecipeDetail/LevelLastBlank';
import LevelBlank from '../Components/RecipeDetail/LevelBlank';

const RecipeDetail = () => {
    const {recipeId} = useParams()
    const thisRecipe = recipesData.find(rep => rep.id == recipeId)
    const testData = {
        "id": 240488,
        "name": "SAUTÉ BUTTER SALMON",
        "ingredients": [
            "salmon",
            "butter",
            "olive oil",
            "parsley",
            "lemon juice",
            "black pepper",
            "salt"
        ],
        "image_url": food,
        "cooking_directions": "Prep\n15 m\nCook\n2 h 30m\nReady In\n2h 45m\nInstructions\nStep 1\nthis is step 1\nStep 2\nthis is step 2",
        "nutritions": {
            "niacin": {
                "displayValue": "120",
                "unit": "mg"
            },
            "sugars": {
                "displayValue": "120",
                "unit": "mg"
            },
            "sodium": {
                "displayValue": "120",
                "unit": "mg"
            },
            "carbohydrates": {
                "displayValue": "120",
                "unit": "mg"
            },
            "vitaminB6": {
                "displayValue": "120",
                "unit": "mg"
            },
            "vitaminC": {
                "displayValue": "120",
                "unit": "mg"
            },
        },
        "level": 5,
        "rating": 801
    }

    const instructions = thisRecipe.cooking_directions.split(/\r?\n/);
    const level_num = thisRecipe.level;

    return (
        <>
        <div className='recipe-detail'>
            <div className='recipe-detail-breadcrumb'>
                <p><Link to={`/`}>Home</Link> &gt; <Link to={`/`}>Recipe</Link> &gt; {thisRecipe.name}</p>
            </div>
            <div className='recipe-detail-content'>
                <div className='recipe-detail-content-left'>
                    <img src = {thisRecipe.image_url} className='recipe-detail-img' alt={thisRecipe.name}/>
                    <div className='recipe-detail-content-left-nutritions'>
                        <div className='recipe-detail-content-left-nutritions-title'>
                            <span className='recipe-detail-content-left-nutritions-title-head'>Nutritions</span>
                            {/* <span className='recipe-detail-content-left-nutritions-title-number'>{thisRecipe.nutritions.length}</span> */}
                        </div>
                        <div className='recipe-detail-content-left-nutritions-list'>
                            {Object.entries(thisRecipe.nutritions).map(([key, value]) => (
                                <NutritiontItem item = {[key, value]} key={[key, value]}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='recipe-detail-content-right'>
                    <div className='recipe-detail-content-right-title'>
                        <h2>{thisRecipe.name}</h2>
                        <div className='recipe-detail-content-right-title-stat'>
                            <div className='recipe-detail-content-right-title-stat-rating'>
                            {
                                [
                                    ...Array(thisRecipe.rating),
                                ].map((value) => (
                                    <StarColor />
                                ))
                            }
                            {
                                [
                                    ...Array(5 - thisRecipe.rating),
                                ].map((value) => (
                                    <StarBlank />
                                ))
                            }
                            </div>
                            {/* <div className='recipe-detail-content-right-title-stat-level'> */}
                                {level_num == 1 &&
                                    <div className='recipe-detail-content-right-title-stat-level'>
                                        <span className='recipe-item-desc-line-2'>
                                            Beginner
                                        </span>
                                        <LevelStartColor />
                                        <LevelBlank />
                                        <LevelBlank />
                                        <LevelBlank />
                                        <LevelLastBlank />
                                    </div>
                                }
                                {level_num == 2 &&
                                    <div className='recipe-detail-content-right-title-stat-level'>
                                        <span className='recipe-item-desc-line-2'>
                                            Beginner
                                        </span>
                                        <LevelStartColor />
                                        <LevelColor />
                                        <LevelBlank />
                                        <LevelBlank />
                                        <LevelLastBlank />
                                    </div>
                                }
                                {level_num == 3 &&
                                    <div className='recipe-detail-content-right-title-stat-level'>
                                        <span className='recipe-item-desc-line-2'>
                                            Intermediate
                                        </span>
                                        <LevelStartColor />
                                        <LevelColor />
                                        <LevelColor />
                                        <LevelBlank />
                                        <LevelLastBlank />
                                    </div>
                                }
                                {level_num == 4 &&
                                    <div className='recipe-detail-content-right-title-stat-level'>
                                        <span className='recipe-item-desc-line-2'>
                                            Beginner
                                        </span>
                                        <LevelStartColor />
                                        <LevelColor />
                                        <LevelColor />
                                        <LevelColor />
                                        <LevelLastBlank />
                                    </div>
                                }
                                {level_num == 5 &&
                                    <div className='recipe-detail-content-right-title-stat-level'>
                                        <span className='recipe-item-desc-line-2'>
                                            Beginner
                                        </span>
                                        <LevelStartColor />
                                        <LevelColor />
                                        <LevelColor />
                                        <LevelColor />
                                        <LevelLastColor />
                                    </div>
                                }
                            {/* </div> */}
                        </div>
                    </div>
                    <div className='recipe-detail-content-right-info'>
                        <div className='recipe-detail-content-right-info-time'>
                            {/* Time  */}
                        </div>
                        <div className='recipe-detail-content-right-info-ingredients'>
                        
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