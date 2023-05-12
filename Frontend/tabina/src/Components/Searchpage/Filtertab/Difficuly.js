import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const Difficulty = () => {
    const [selectedDifficulties, setSelectedDifficulties] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxClick = (event) => {
        const difficulty = event.target.nextSibling.innerText;
        const isChecked =  event.target.checked;
      
        if (isChecked) {
          setSelectedDifficulties(difficulty);
          setIsChecked(true);
        } else {
          setSelectedDifficulties(null);
          setIsChecked(false);
        }
      };
      
      

    const navigate = useNavigate();

    useEffect(() => {
        const currentSearch = window.location.search;
        let newQuery = "";
        !currentSearch ? newQuery = `?level=${selectedDifficulties}` : newQuery = `&level=${selectedDifficulties}`;
        let finalQuery = currentSearch.concat(newQuery);
        selectedDifficulties === null ? finalQuery = currentSearch : finalQuery = currentSearch.concat(newQuery);
        console.log(selectedDifficulties);  
        navigate(finalQuery);
    }, [selectedDifficulties]);

      

    return (
        <>
     <div className='heading-tab'>  
            <p>Filters</p>
        </div>
        <div>
            <p className='diff'>Difficulty</p>
            <label className='diff-level'>
                <input type='checkbox'  className='diff-option' onClick={handleCheckboxClick} />
                <span  className='class-lvl'>World-Class</span>
            </label>
            <label className='diff-level'>
                <input type='checkbox' className='diff-option' onClick={handleCheckboxClick} />
                <span className='class-lvl'>Expert</span>
            </label>
            <label className='diff-level'>
                <input type='checkbox' className='diff-option' onClick={handleCheckboxClick} />
                <span className='class-lvl'>Intermidiate</span>
            </label>
            <label className='diff-level'>
                <input type='checkbox' className='diff-option' onClick={handleCheckboxClick} />
                <span className='class-lvl'>Average</span>
            </label>
            <label className='diff-level'>
                <input type='checkbox' className='diff-option' onClick={handleCheckboxClick} />
                <span className='class-lvl'>Beginner</span>
            </label>

        </div>
    </>

    )
    
}

export default Difficulty;