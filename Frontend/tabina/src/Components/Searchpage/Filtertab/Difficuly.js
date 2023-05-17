import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const Difficulty = (props) => {
    const {handleCheckboxClick, level} = props;
 
    return (
        <>
     <div className='heading-tab'>  
            <p>Filters</p>
        </div>
        <div>
            <p className='diff'>Difficulty</p>
            <label className='diff-level'>
                <input type='radio'  className='diff-option' name="level" onClick={event => handleCheckboxClick(event.target.value)} value="5" checked={level === "5"} />
                <span  className='class-lvl'>World-Class</span>
            </label>
            <label className='diff-level'>
                <input type='radio' className='diff-option' name="level" onClick={event => handleCheckboxClick(event.target.value)} value="4" checked={level === "4"} />
                <span className='class-lvl'>Expert</span>
            </label>
            <label className='diff-level'>
                <input type='radio' className='diff-option' name="level" onClick={event => handleCheckboxClick(event.target.value)} value="3" checked={level === "3"} />
                <span className='class-lvl'>Intermidiate</span>
            </label>
            <label className='diff-level'>
                <input type='radio' className='diff-option' name="level" onClick={event => handleCheckboxClick(event.target.value)} value="2" checked={level === "2"} />
                <span className='class-lvl'>Average</span>
            </label>
            <label className='diff-level'>
                <input type='radio' className='diff-option' name="level" onClick={event => handleCheckboxClick(event.target.value)} value="1" checked={level === "1"} />
                <span className='class-lvl'>Beginner</span>
            </label>
            <label className='diff-level'>
                <input type='radio' className='diff-option' name="level" onClick={event => handleCheckboxClick(event.target.value)} value="0" checked={level === "0"} />
                <span className='class-lvl'>None</span>
            </label>

        </div>
    </>

    )
    
}

export default Difficulty;