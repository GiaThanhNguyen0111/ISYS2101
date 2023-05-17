import React, {useState, useEffect} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import '../Css/page/recipe-detail.css';
import food from '../Image/img/recipe/salmon.jpg';
import salmon from '../Image/img/recipe/IgSalmon.png'
import butter from '../Image/img/recipe/IgButter.png'
import oliveOil from '../Image/img/recipe/IgOliveOil.png'
import parsley from '../Image/img/recipe/IgParsley.png'
import pepper from '../Image/img/recipe/IgPepper.png'
import salt from '../Image/img/recipe/IgSalt.png'
import lemon from '../Image/img/recipe/IgLemon.png'
import question from '../Image/img/recipe/question-mark.png'
import bulb from '../Image/img/recipe/bulb.png'
import ribbon from '../Image/img/recipe/ribbon.png'

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
import Tag from '../Components/Tag';


// const removeSpace = (s) => {
//     const splitString = s.split(" ");
//     let newString = ""
//     for (let index = 0; index < splitString.length; index++) {
//         newString += splitString[index]
//     }

//     return newString;
// }

console.log(window.screen.width);
console.log(window.screen.height);

const RecipeDetail = () => {
    // <-- access route state
    const { state } = useLocation(); 

    // <-- unpack the item from state
    const { recipe } = state || {}; 

    // const params = useParams();

    // const [recieveId, setRecieveId] = useState("test id");
    // const [recipes, setRecipes] = useState([]);

    // const thisRecipe = recipesData.find(rep => rep._id === recipeId)

    // useEffect(() => {
    //     setRecieveId(recipeId);
    // }, []);

    // can set but why there are 2 console lines with 2 different value
    // console.log(recieveId);
    // console.log(recieveId);

    // useEffect(() => {
    //     axios.get(`http://localhost:3001/getRecipeDetail?recipeID=${params.recipeId}`).then(response => {
    //         console.log(response);
    //         setRecipes(response.data.recipes);
    //     });
    // }, [params.recipeId]);

    const thisRecipe = recipe;

    if (!thisRecipe) {
        return <Navigate to="/not-found" replace/>
    }

    console.log(thisRecipe);

    // handle properties from the recieved recipe
    const instructions = thisRecipe.cooking_directions.split(/\r?\n/);
    var steps = [];
    var time = {
        prep: "10m",
        cook: "15m",
        total: "25m"
    }

    for (let index = 0; index < instructions.length; index++) {
        if (instructions[index] === "Prep") {
            time.prep = (instructions[index + 1]).replaceAll(" ", "");
        }

        if (instructions[index] === "Cook") {
            time.cook = (instructions[index + 1]).replaceAll(" ", "");
        }

        if (instructions[index] === "Ready In") {
            time.total = (instructions[index + 1]).replaceAll(" ", "");
        }

        if (instructions[index].length > 10) {
            steps.push(instructions[index]);
        }
    }

    const level_num = thisRecipe.level;

    var choosenNutrition = "";
    var choosenValue = 0;
    for (const [key, value] of Object.entries(thisRecipe.nutritions[0])) {
        if (value.amount > choosenValue) {
            choosenNutrition = key;
            choosenValue = value.amount;
        }
    }

    const stepRender = steps.map((item, index) => 
        <div className='recipe-detail-content-right-instructions-list-item' key={index}>
            <div className='recipe-detail-content-right-instructions-list-item-number'>
                <span>{index + 1}</span>
            </div>
            <span className='recipe-detail-content-right-instructions-list-item-content'>
                {item}
            </span>
        </div>
    );

    // document.getElementById("recipe-detail-content-left-id").style.height = document.getElementById("recipe-detail-content-right-id").clientHeight;

    return thisRecipe ? (
        <>
        {/* this one is 6458f1e9e53e500f2252bc86 ? */}
        {/* <h1>{recieveId}</h1> */}
        <div className='recipe-detail'>
            <div className='recipe-detail-breadcrumb'>
                <p><Link to={`/`}>Home</Link> &gt; <Link to={`/recipes`}>Recipe</Link> &gt; {thisRecipe.name}</p>
            </div>
            {}
            <div className='recipe-detail-content'>
                <div className='recipe-detail-content-left'>
                    <img src = {thisRecipe.image_url} className='recipe-detail-img' alt={thisRecipe.name}/>
                    <div className='recipe-detail-content-left-nutritions'>
                        <div className='recipe-detail-content-left-nutritions-title'>
                            <span className='recipe-detail-content-left-nutritions-title-head'>Nutritions</span>
                            {/* <span className='recipe-detail-content-left-nutritions-title-number'>{thisRecipe.nutritions.length}</span> */}
                        </div>
                        <div className='recipe-detail-content-left-nutritions-list'>
                            {Object.entries(thisRecipe.nutritions[0]).map(([key, value]) => (
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
                                            Average
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
                                            Expert
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
                                            World-class
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
                        <div className='recipe-detail-content-right-title-tag'>
                            <Tag str={thisRecipe.category} />
                            <Tag str={thisRecipe.meal_type} />
                        </div>
                    </div>
                    <div className='recipe-detail-content-right-info'>
                        <div className='recipe-detail-content-right-info-time'>
                            <span className='recipe-detail-content-right-info-title'>Time</span>
                            <div className='recipe-detail-content-right-info-time-container'>
                                <div className='recipe-detail-content-right-info-time-total'>
                                    <span className='recipe-detail-content-right-info-time-total-title'>Total</span>
                                    <span className='recipe-detail-content-right-info-time-total-value'>{time.total}</span>
                                </div>
                                <div className='recipe-detail-content-right-info-time-total'>
                                    <span className='recipe-detail-content-right-info-time-total-title'>Prep</span>
                                    <span className='recipe-detail-content-right-info-time-total-value'>{time.prep}</span>
                                </div>
                                <div className='recipe-detail-content-right-info-time-total'>
                                    <span className='recipe-detail-content-right-info-time-total-title'>Cook</span>
                                    <span className='recipe-detail-content-right-info-time-total-value'>{time.cook}</span>
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
                            {/* <button className='recipe-detail-content-right-info-ingredients-dropdown'>Click</button> */}
                        </div>
                        <div className='recipe-detail-content-right-info-calo'>
                            <img src={bulb} className='recipe-detail-content-right-info-calo-img-left' alt="fun fact"/>
                            <span className='recipe-detail-content-right-info-calo-span'>
                                This recipe has <strong>{thisRecipe.nutritions[0][choosenNutrition].displayValue}</strong>&nbsp;
                                {thisRecipe.nutritions[0][choosenNutrition].unit} of&nbsp;
                                {thisRecipe.nutritions[0][choosenNutrition].name}
                            </span>
                            <img src = {ribbon} className='recipe-detail-content-right-info-calo-img-right' alt="fun fact"/>
                        </div>
                    </div>
                    <div className='recipe-detail-content-right-instructions'>
                        <span className='recipe-detail-content-right-instructions-title'>Instructions</span>
                        <div className='recipe-detail-content-right-instructions-list'>
                            {stepRender}
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </>
    ): "No item"
}


export default RecipeDetail;