import React from 'react';
import '../Css/recipeItem.css'
import food from '../Image/img/recipe/salmon.jpg'
import StarColor from './StarColor';
import StarBlank from './StarBlank';

const RecipeItem = (props) => {
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

    const instructions = props.recipe.cooking_directions.split(/\r?\n/);
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
    }

    const level_num = props.recipe.level;

    return (
        <>
        <div className='recipe-item'>
            <img src = {props.recipe.image_url} className='recipe-item-img' alt={props.recipe.name}/>
            <h3>{props.recipe.name}</h3>
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
                    {time.prep}
                </span>
            </div>
            <div className='recipe-item-desc-line'>
                <span className='recipe-item-desc-line-1'>
                    Cooking time:
                </span>
                <span className='recipe-item-desc-line-2'>
                    {time.cook}
                </span>
            </div>
            <div className='recipe-item-desc-line'>
                <span className='recipe-item-desc-line-1'>
                    Difficulty:
                </span>
                {/* <span className='recipe-item-desc-line-2'>
                    {difficulty}
                </span> */}
                {level_num == 1 &&
                    <span className='recipe-item-desc-line-2'>
                        Beginner
                    </span>
                }
                {level_num == 2 &&
                    <span className='recipe-item-desc-line-2'>
                        Average
                    </span>
                }
                {level_num == 3 &&
                    <span className='recipe-item-desc-line-2'>
                        Intermediate
                    </span>
                }
                {level_num == 4 &&
                    <span className='recipe-item-desc-line-2'>
                        Expert
                    </span>
                }
                {level_num == 5 &&
                    <span className='recipe-item-desc-line-2'>
                        World-class
                    </span>
                }
            </div>
        </div>
        </>
    )
}


export default RecipeItem;