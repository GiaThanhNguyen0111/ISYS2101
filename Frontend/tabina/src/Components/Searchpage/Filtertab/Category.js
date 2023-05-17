import React from 'react'

const Category = (props) => {
    const {handleButtonClick} = props;

    return (
        <><div>
        <p className='diff'>Category</p>
 
        </div>
        <label className='diff-level'>
                 <input type='radio'  className='diff-option' name='Category' value="diary" onClick={e => handleButtonClick(e.target.value)}/>
                 <span  className='class-lvl'>Diary</span>
             </label>
             <label className='diff-level'>
                 <input type='radio'  className='diff-option' name='Category' value="meat" onClick={e => handleButtonClick(e.target.value)}/>
                 <span  className='class-lvl' >Meat</span>
             </label>
             <label className='diff-level'>
                 <input type='radio'  className='diff-option' name='Category' value="vegetable" onClick={e => handleButtonClick(e.target.value)}/>
                 <span  className='class-lvl'>Vegetable</span>
             </label>
             <label className='diff-level'>
                 <input type='radio'  className='diff-option' name='Category' value="fatty" onClick={e => handleButtonClick(e.target.value)}/>
                 <span  className='class-lvl'>Fatty</span>
             </label>
             <label className='diff-level'>
                 <input type='radio'  className='diff-option' name='Category' value="grains" onClick={e => handleButtonClick(e.target.value)}/>
                 <span  className='class-lvl'>Grains</span>
             </label>
             <label className='diff-level'>
                 <input type='radio'  className='diff-option' name='Category' value="" onClick={e => handleButtonClick(e.target.value)}/>
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