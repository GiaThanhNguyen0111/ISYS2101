import React from 'react'

const Mealtype = () => {
    return (
        <><div>
        <p className='diff'>Meal type</p>
 
        </div>
        <label className='diff-level'>
                 <input type='checkbox'  className='diff-option' />
                 <span  className='class-lvl'>Appetizer</span>
             </label>
             <label className='diff-level'>
                 <input type='checkbox'  className='diff-option' />
                 <span  className='class-lvl'>Main</span>
             </label>
             <label className='diff-level'>
                 <input type='checkbox'  className='diff-option' />
                 <span  className='class-lvl'>Dessert</span>
             </label>
             <br/>
             <br/>
             <br/>
             
 
 
         </>
    )
}

export default Mealtype