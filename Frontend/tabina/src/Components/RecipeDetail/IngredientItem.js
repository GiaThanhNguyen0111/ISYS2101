import React from 'react';
import salmon from '../../Image/img/recipe/IgSalmon.png'
import '../../Css/ingredientItem.css'

const IngredientItem = (props) => {
    return (
        <>
        <div className='ingredient-item'>
            <div className='ingredient-item-big'>
                <img src = {props.item.ingredient.image} className='ingredient-item-big-img' alt={props.item.ingredient.name + 'ingredient'}/>
            </div>
            <span className='ingredient-item-title'>{props.item.ingredient.name}</span>
            <span className='ingredient-item-amount'>{props.item.amount}</span>
        </div>
        </>
    )
}


export default IngredientItem;