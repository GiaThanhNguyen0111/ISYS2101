import React from 'react';
import '../../Css/postItem.css'
import dot from '../../Image/img/post/black-circle.png'

import postsData from '../../test-data/postsData';

const PostItem = (props) => {
    const {post} = props;
    
    // var ingredientString = "";
    // post.ingredients.map((value, index) => {
    //     if (index == 0) {
    //         ingredientString += value;
    //     } else {
    //         ingredientString += ", " + value;
    //     } 
    // });

    console.log(post);

    return (
        <>
        <div className='post-item'>
            <h3 className='post-item-title'>{post.title}</h3>
            <div className='post-item-info'>
                <span className='post-item-info-author'>11111</span>
                <img src={dot} className='post-item-info-img' />
                <span className='post-item-info-author'>{post.createdAt}</span>
            </div>
            <div className='post-item-content'>
                <div className='post-item-content-block'>
                    <span className='post-item-content-block-name post-item-content-block-name-1'>Ingredients:</span>
                    <div className='post-item-content-block-list'>
                        {post.ingredients[0]}
                    </div>
                </div>
                <div className='post-item-content-block'>
                    <span className='post-item-content-block-name'>Instructions:</span>
                    <div className='post-item-content-block-list'>
                        {post.instruction}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default PostItem;