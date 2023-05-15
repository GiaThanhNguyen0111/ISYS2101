import React from 'react';
import salmon from '../../Image/img/recipe/IgSalmon.png'
import '../../Css/ingredientItem.css'

const IngredientItem = (props) => {
    return (
        <>
        <div className='ingredient-item'>
            <span className='ingredient-item-name'>{props.value}</span>
            <span className='ingredient-item-x'>x</span>
        </div>
        </>
    )
}


export default IngredientItem;