import React from 'react';
import salmon from '../../Image/img/recipe/IgSalmon.png'
import '../../Css/nutritionItem.css'

const NutritiontItem = (props) => {
    return (
        <>
        <div className='nutrition-item'>
            <div className='nutrition-item-big'>
                <img src = {salmon} className='nutrition-item-big-img' alt={props.item[0] + 'nutrition'}/>
            </div>
            <span className='nutrition-item-title'>{props.item[0]}</span>
            <span className='nutrition-item-amount'>{props.item[1].displayValue}{props.item[1].unit}</span>
        </div>
        </>
    )
}


export default NutritiontItem;