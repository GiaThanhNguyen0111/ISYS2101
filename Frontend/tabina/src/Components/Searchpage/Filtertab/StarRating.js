import React, { useState, useEffect } from 'react'
import starBlank from '../../../Image/img/recipe/starBlank.png'
import starColor from '../../../Image/img/recipe/starColor.png'
import { useNavigate } from 'react-router-dom'

const StarRating = (props) => {
    const {handleCheckboxClick, rating} = props;


    const navigate = useNavigate();

    return (
        <>
            {/* Star rating tab */}
            <div className='rating-tab'>

<p className='diff'>Rating</p>

{/* 5 star */}


<label className='diff-level' >
<input type='radio' name='rating' className='diff-option' onClick={event => handleCheckboxClick(event.target.value)} value="5" checked={rating === '5'}/>
<p style={{display: 'none'}}>5</p>

<div className='star-rat'>
<img src= {starColor} className='st-cl' alt='rating color'/>
<img src= {starColor} className='st-cl' alt='rating color'/>
<img src= {starColor} className='st-cl' alt='rating color'/>
<img src= {starColor} className='st-cl' alt='rating color'/>
<img src= {starColor} className='st-cl' alt='rating color'/>

</div>
    
</label>

{/* 4 star */}

<label className='diff-level'>
<input type='radio' name='rating' className='diff-option' onClick={event => handleCheckboxClick(event.target.value)} value="4" checked={rating === '4'} />
<p style={{display: "none"}}>4</p>
<div className='star-rat'>
<img src= {starColor} className='st-cl' alt='rating color'/>
<img src= {starColor} className='st-cl' alt='rating color'/>
<img src= {starColor} className='st-cl' alt='rating color'/>
<img src= {starColor} className='st-cl' alt='rating color'/>
<img src= {starBlank} className='st-cl' alt='rating color'/>

</div>
    
</label>

{/* 3 star */}

<label className='diff-level'>
<input type='radio' name='rating' className='diff-option' onClick={event => handleCheckboxClick(event.target.value)} value="3" checked={rating === '3'} />
<p style={{display: "none"}}>3</p>

<div className='star-rat'>
<img src= {starColor} className='st-cl' alt='rating color'/>
<img src= {starColor} className='st-cl' alt='rating color'/>
<img src= {starColor} className='st-cl' alt='rating color'/>
<img src= {starBlank} className='st-cl' alt='rating color'/>
<img src= {starBlank} className='st-cl' alt='rating color'/>

</div>
    

</label>

{/* 2 star */}

 <label className='diff-level'>
 <input type='radio' name='rating' className='diff-option' onClick={event => handleCheckboxClick(event.target.value)} value="2" checked={rating === '2'} />
<p style={{display: "none"}}>2</p>

<div className='star-rat'>
<img src= {starColor} className='st-cl' alt='rating color'/>
<img src= {starColor} className='st-cl' alt='rating color'/>
<img src= {starBlank} className='st-cl' alt='rating color'/>
<img src= {starBlank} className='st-cl' alt='rating color'/>
<img src= {starBlank} className='st-cl' alt='rating color'/>

</div>
    
</label>

{/* 1 star */}

<label className='diff-level'>
<input type='radio' name='rating' className='diff-option' onClick={event => handleCheckboxClick(event.target.value)} value="1" checked={rating === '1'} />
<p style={{display: "none"}}>1</p>

<div className='star-rat'>
<img src= {starColor} className='st-cl' alt='rating color'/>
<img src= {starBlank} className='st-cl' alt='rating color'/>
<img src= {starBlank} className='st-cl' alt='rating color'/>
<img src= {starBlank} className='st-cl' alt='rating color'/>
<img src= {starBlank} className='st-cl' alt='rating color'/>

</div>
    
</label>
<label className='diff-level'>
<input type='radio' name='rating' className='diff-option' onClick={event => handleCheckboxClick(event.target.value)} value="0" checked={rating === '0'}/>
<p style={{display: "none"}}>0</p>

<div className='star-rat' style={{marginLeft: "15px", fontSize: "23px"}}>
    None
</div>
    
</label>





</div> </>
    )
}

export default StarRating