import React from 'react';
import '../Css/star.css'
import starBlank from '../Image/img/recipe/starBlank.png'

const StarBlank = () => {
    return (
        <>
            <img src= {starBlank} className='star-color' alt='rating blank'/>
        </>
    )

}

export default StarBlank;