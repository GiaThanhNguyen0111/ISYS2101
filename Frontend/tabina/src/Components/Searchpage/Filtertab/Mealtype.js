import React from 'react'

const Mealtype = () => {
    return (
        <><div>
        <p className='diff'>Meal type</p>
 
        </div>
        <label className='diff-level'>
                 <input type='radio'  className='diff-option' name='mealtype' />
                 <span  className='class-lvl'>Appetizer</span>
             </label>
             <label className='diff-level'>
                 <input type='radio'  className='diff-option' name='mealtype' />
                 <span  className='class-lvl'>Main</span>
             </label>
             <label className='diff-level'>
                 <input type='radio'  className='diff-option' name='mealtype' />
                 <span  className='class-lvl'>Dessert</span>
             </label>
             <label className='diff-level'>
                 <input type='radio'  className='diff-option' name='mealtype' />
                 <span  className='class-lvl'>None</span>
             </label>
             <br/>

             
 
 
         </>
    )
}

export default Mealtype