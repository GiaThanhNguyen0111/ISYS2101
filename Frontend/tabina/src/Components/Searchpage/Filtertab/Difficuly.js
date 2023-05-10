import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const Difficulty = () => {
    const [selectedDifficulties, setSelectedDifficulties] = useState([]);

    const handleCheckboxClick = (event) => {
        const difficulty = event.target.nextSibling.innerText;
        const isChecked =  event.target.checked;
      
        if (isChecked) {
          setSelectedDifficulties([...selectedDifficulties, difficulty]);
        } else {
          setSelectedDifficulties(selectedDifficulties.filter((d) => d !== difficulty));
        }
      };
      
      

const navigate = useNavigate();

useEffect(() => {
  const query = selectedDifficulties.join('&difficulty=');
  const newQuery = query ? `?difficulty=${query}` : '';
  navigate(newQuery);
}, [selectedDifficulties, navigate]);

      

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