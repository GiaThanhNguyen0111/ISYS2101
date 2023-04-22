import React from 'react';
import '../Css/recipeItem.css'
import food from '../Image/img/recipe/salmon.jpg'

const RecipeItem = () => {
    return (
        <>
        <div className='recipe-item'>
            <div className='recipe-item-img'>
                <img src = {food} className='recipe-item-img-food' />
            </div>
            <div className='recipe-item-body'>
                <div className='recipe-item-body-title'>

                </div>
                <div className='recipe-item-body-rating'>

                </div>
                <div className='recipe-item-body-desc'>
                    <div className='recipe-item-body-desc-text'>

                    </div>
                    <div className='recipe-item-body-desc-value'>

                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default RecipeItem;