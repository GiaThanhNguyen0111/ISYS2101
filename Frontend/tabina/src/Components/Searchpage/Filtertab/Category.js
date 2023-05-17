import React from 'react'

const Category = () => {
    return (
        <><div>
        <p className='diff'>Category</p>
 
        </div>
        <label className='diff-level'>
                 <input type='radio'  className='diff-option' name='Category' />
                 <span  className='class-lvl'>Diary</span>
             </label>
             <label className='diff-level'>
                 <input type='radio'  className='diff-option' name='Category' />
                 <span  className='class-lvl' >Meat</span>
             </label>
             <label className='diff-level'>
                 <input type='radio'  className='diff-option' name='Category'/>
                 <span  className='class-lvl'>Vegetable</span>
             </label>
             <label className='diff-level'>
                 <input type='radio'  className='diff-option' name='Category'/>
                 <span  className='class-lvl'>Fatty</span>
             </label>
             <label className='diff-level'>
                 <input type='radio'  className='diff-option' name='Category'/>
                 <span  className='class-lvl'>Grains</span>
             </label>
             <label className='diff-level'>
                 <input type='radio'  className='diff-option' name='Category'/>
                 <span  className='class-lvl'>None</span>
             </label>
             <br/>
             <br/>
             <br/>
             <br/>
             
 
 
         </>
    )
}

export default Category