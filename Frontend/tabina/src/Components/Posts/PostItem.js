import React from 'react';
import '../../Css/postItem.css'
import dot from '../../Image/img/post/black-circle.png'

import postsData from '../../test-data/postsData';

const PostItem = (props) => {
    const test = [
        {
            author_id: "Bao Hoang",
            title: "Foolproof Rosemary Chicken Wings",
            instructions: "Arrange the chicken wings, rosemary, and garlic cloves on a broiler-proof baking sheet, making sure the chicken pieces are not touching. Drizzle the olive oil over the chicken and garlic. Season the wings on all sides with the lemon pepper and seasoned salt.",
            ingredients: [
                "chickens wings", 
                "sprigs rosemary", 
                "head garlic", 
                "olive oil", 
                "lemon pepper", 
                "seasoned salt"
            ],
            date: "17 May, 2023"
        }
    ]
    
    var ingredientString = "";
    test[0].ingredients.map((value, index) => {
        if (index == 0) {
            ingredientString += value;
        } else {
            ingredientString += ", " + value;
        } 
    })

    console.log(props.post);

    return (
        <>
        <div className='post-item'>
            <h3 className='post-item-title'>{test[0].title}</h3>
            <div className='post-item-info'>
                <span className='post-item-info-author'>{test[0].author_id}</span>
                <img src={dot} className='post-item-info-img' />
                <span className='post-item-info-author'>{test[0].date}</span>
            </div>
            <div className='post-item-content'>
                <div className='post-item-content-block'>
                    <span className='post-item-content-block-name post-item-content-block-name-1'>Ingredients:</span>
                    <div className='post-item-content-block-list'>
                        {ingredientString}
                    </div>
                </div>
                <div className='post-item-content-block'>
                    <span className='post-item-content-block-name'>Instructions:</span>
                    <div className='post-item-content-block-list'>
                        {test[0].instructions}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default PostItem;