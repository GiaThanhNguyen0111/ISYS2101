import React from 'react';
import salmon from '../../Image/img/recipe/IgSalmon.png'
import '../../Css/nutritionItem.css'
// import fs from 'fs';

// const tryRequire = (path) => {
//     try {
//      return require(`${path}`);
//     } catch (err) {
//         console.log(err);
//      return null;
//     }   
//   };



const NutritiontItem = (props) => {
    // console.log(require(`../../Image/img/nutrition/${props.item[0]}.png`));
    // console.log(tryRequire(`../../Image/img/nutrition/${props.item[0]}.png`));

    return (
        <>
        <div className='nutrition-item'>
            <div className='nutrition-item-big'>
                {/* {
                    tryRequire(`../../Image/img/nutrition/${props.item[0]}.png`) ?
                    <img src = {`../../Image/img/nutrition/${props.item[0]}.png`} className='nutrition-item-big-img' 
                    alt={props.item[0] + ' nutrition'} /> : 
                    <span>{props.item[1].name[0]}</span>
                } */}
                {/* <img src = {require(`../../Image/img/nutrition/${props.item[0]}.png`)} className='nutrition-item-big-img' 
                alt={props.item[0] + ' nutrition'} /> */}
                <span>{props.item[1].name[0]}</span>
                {/* {ImgLoader} */}
            </div>
            <span className='nutrition-item-title'>{props.item[1].name}</span>
            <span className='nutrition-item-amount'>{props.item[1].displayValue}{props.item[1].unit}</span>
        </div>
        </>
    )
}


export default NutritiontItem;