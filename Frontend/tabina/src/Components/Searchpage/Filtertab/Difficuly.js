import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const Difficulty = (props) => {
    const {handleCheckboxClick} = props;
    // const [selectedDifficulties, setSelectedDifficulties] = useState(null);
    // const [isChecked, setIsChecked] = useState(false);
    // const handleCheckboxClick = (event) => {
    //     const difficulty = event.target.nextSibling.innerText;
    //     const isChecked =  event.target.checked;
      
    //     if (isChecked) {
    //       setSelectedDifficulties(difficulty);
    //       setIsChecked(true);
    //     } else {
    //       setSelectedDifficulties(null);
    //       setIsChecked(false);
    //     }
    //   };
      
      

    // const navigate = useNavigate();

    // useEffect(() => {
    //     const currentSearch = window.location.search;
    //     let newQuery = "";
    //     !currentSearch ? newQuery = `?level=${selectedDifficulties}` : newQuery = `&level=${selectedDifficulties}`;
    //     let finalQuery = currentSearch.concat(newQuery);
    //     selectedDifficulties === null ? finalQuery = currentSearch : finalQuery = currentSearch.concat(newQuery);
    //     console.log(selectedDifficulties);  
    //     navigate(finalQuery);
    // }, [selectedDifficulties]);      

    return (
        <>
     <div className='heading-tab'>  
            <p>Filters</p>
        </div>
        <div>
            <p className='diff'>Difficulty</p>
            <label className='diff-level'>
                <input type='radio'  className='diff-option' name="level" onClick={event => handleCheckboxClick(event.target.value)} value="5"/>
                <span  className='class-lvl'>World-Class</span>
            </label>
            <label className='diff-level'>
                <input type='radio' className='diff-option' name="level" onClick={event => handleCheckboxClick(event.target.value)} value="4"/>
                <span className='class-lvl'>Expert</span>
            </label>
            <label className='diff-level'>
                <input type='radio' className='diff-option' name="level" onClick={event => handleCheckboxClick(event.target.value)} value="3"/>
                <span className='class-lvl'>Intermidiate</span>
            </label>
            <label className='diff-level'>
                <input type='radio' className='diff-option' name="level" onClick={event => handleCheckboxClick(event.target.value)} value="2"/>
                <span className='class-lvl'>Average</span>
            </label>
            <label className='diff-level'>
                <input type='radio' className='diff-option' name="level" onClick={event => handleCheckboxClick(event.target.value)} value="1"/>
                <span className='class-lvl'>Beginner</span>
            </label>
            <label className='diff-level'>
                <input type='radio' className='diff-option' name="level" onClick={event => handleCheckboxClick(event.target.value)} value="0"/>
                <span className='class-lvl'>None</span>
            </label>

        </div>
    </>

    )
    
}

export default Difficulty;