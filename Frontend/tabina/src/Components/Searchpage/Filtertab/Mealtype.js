import React from 'react'

const Mealtype = (props) => {
    const {handleButtonClick, mealType} = props;

    return (
        <><div>
        <p className='diff'>Meal type</p>
 
        </div>
        <label className='diff-level'>
                 <input type='radio'  className='diff-option' name='mealtype' value="appetizer" onClick={e => handleButtonClick(e.target.value)} checked={mealType === 'appetizer'}/>
                 <span  className='class-lvl'>Appetizer</span>
             </label>
             <label className='diff-level'>
                 <input type='radio'  className='diff-option' name='mealtype' value="main" onClick={e => handleButtonClick(e.target.value)} checked={mealType === "main"}/>
                 <span  className='class-lvl'>Main</span>
             </label>
             <label className='diff-level'>
                 <input type='radio'  className='diff-option' name='mealtype' value="dessert" onClick={e => handleButtonClick(e.target.value)} checked={mealType === "dessert"}/>
                 <span  className='class-lvl'>Dessert</span>
             </label>
             <label className='diff-level'>
                 <input type='radio'  className='diff-option' name='mealtype' value="" onClick={e => handleButtonClick(e.target.value)}/>
                 <span  className='class-lvl'>None</span>
             </label>
             <br/>

             
 
 
         </>
    )
}

export default Mealtype