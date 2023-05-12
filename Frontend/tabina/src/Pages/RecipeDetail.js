import React, {useState, useEffect} from 'react';
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
import IngredientItem from '../Components/RecipeDetail/IngredientItem';
import axios from 'axios';

const RecipeDetail = () => {
    const {recipeId} = useParams();

    const [recieveId, setRecieveId] = useState("test id");
    // const [thisRecipe, setThisRecipe] = useState({});

    const thisRecipe = recipesData.find(rep => rep._id === recipeId)

    useEffect(() => {
        setRecieveId(recipeId);
    }, []);

    // can set but why there are 2 console lines with 2 different value
    console.log(recieveId);
    console.log(recieveId);

    // useEffect(() => {
    //     axios.get(`http://localhost:3001/getRecipeDetail?recipeID=${recieveId}`).then(response => {
    //         setThisRecipe(response.data.recipes[0]);
    //     });
    // }, []);

    console.log(thisRecipe);

    // handle properties from the recieved recipe
    const instructions = thisRecipe.cooking_directions.split(/\r?\n/);
    var prep = "10m";
    var cook = "15m";
    var total = "25m";

    for (let index = 0; index < instructions.length; index++) {
        if (instructions[index] === "Prep") {
            prep = instructions[index + 1];
        }

        if (instructions[index] === "Cook") {
            cook = instructions[index + 1];
        }

        if (instructions[index] === "Ready In") {
            total = instructions[index + 1];
        }
    }
    const level_num = thisRecipe.level;

    return (
        <>
        {/* this one is 6458f1e9e53e500f2252bc86 ? */}
        <h1>{recieveId}</h1>
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
                                {level_num === 1 &&
                                    <div className='recipe-detail-content-right-title-stat-level'>
                                        <span className='recipe-detail-content-right-title-stat-level-name'>
                                            Beginner
                                        </span>
                                        <LevelStartColor />
                                        <LevelBlank />
                                        <LevelBlank />
                                        <LevelBlank />
                                        <LevelLastBlank />
                                    </div>
                                }
                                {level_num === 2 &&
                                    <div className='recipe-detail-content-right-title-stat-level'>
                                        <span className='recipe-detail-content-right-title-stat-level-name'>
                                            Beginner
                                        </span>
                                        <LevelStartColor />
                                        <LevelColor />
                                        <LevelBlank />
                                        <LevelBlank />
                                        <LevelLastBlank />
                                    </div>
                                }
                                {level_num === 3 &&
                                    <div className='recipe-detail-content-right-title-stat-level'>
                                        <span className='recipe-detail-content-right-title-stat-level-name'>
                                            Intermediate
                                        </span>
                                        <LevelStartColor />
                                        <LevelColor />
                                        <LevelColor />
                                        <LevelBlank />
                                        <LevelLastBlank />
                                    </div>
                                }
                                {level_num === 4 &&
                                    <div className='recipe-detail-content-right-title-stat-level'>
                                        <span className='recipe-detail-content-right-title-stat-level-name'>
                                            Beginner
                                        </span>
                                        <LevelStartColor />
                                        <LevelColor />
                                        <LevelColor />
                                        <LevelColor />
                                        <LevelLastBlank />
                                    </div>
                                }
                                {level_num === 5 &&
                                    <div className='recipe-detail-content-right-title-stat-level'>
                                        <span className='recipe-detail-content-right-title-stat-level-name'>
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
                            <span className='recipe-detail-content-right-info-title'>Time</span>
                            <div className='recipe-detail-content-right-info-time-container'>
                                <div className='recipe-detail-content-right-info-time-total'>
                                    <span className='recipe-detail-content-right-info-time-total-title'>Total</span>
                                    <span className='recipe-detail-content-right-info-time-total-value'>{instructions[5]}</span>
                                </div>
                                <div className='recipe-detail-content-right-info-time-total'>
                                    <span className='recipe-detail-content-right-info-time-total-title'>Prep</span>
                                    <span className='recipe-detail-content-right-info-time-total-value'>{instructions[1]}</span>
                                </div>
                                <div className='recipe-detail-content-right-info-time-total'>
                                    <span className='recipe-detail-content-right-info-time-total-title'>Cook</span>
                                    <span className='recipe-detail-content-right-info-time-total-value'>{instructions[3]}</span>
                                </div>
                            </div>        
                        </div>
                        <div className='recipe-detail-content-right-info-ingredients'>
                            <span className='recipe-detail-content-right-info-title'>Ingredients</span>
                            <div className='recipe-detail-content-right-info-ingredients-list'>
                                {thisRecipe.ingredients.map((value) => (
                                    <IngredientItem value = {value} />
                                ))}
                            </div>    
                        </div>
                        <div className='recipe-detail-content-right-info-calo'>
                            
                        </div>
                    </div>
                    <div className='recipe-detail-content-right-instructions'>
                    
                    </div>
                </div>
            </div>
        </div> 

        {/* <h1>{recipeId}</h1> */}
        </>
    )
}


export default RecipeDetail;