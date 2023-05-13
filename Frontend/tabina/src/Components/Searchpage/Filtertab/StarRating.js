import React, { useState, useEffect } from 'react'
import starBlank from '../../../Image/img/recipe/starBlank.png'
import starColor from '../../../Image/img/recipe/starColor.png'
import { useNavigate } from 'react-router-dom'

const StarRating = () => {
    const [selectedRating, setSelectedRating] = useState(null);

    const handleCheckRating = (event) => {
        const rating = event.target.nextSibling.innerHTML;
        const isChecked = event.target.checked;

        if (isChecked) {
          setSelectedRating(rating);
        } else {
          setSelectedRating(null);
        }
      };
      
      

const navigate = useNavigate();

useEffect(() => {
  const currentSearch = window.location.search; 
  let newQuery = '';
  !currentSearch ? newQuery = `?rating=${selectedRating}` : newQuery = `&rating=${selectedRating}`;
  let finalQuery = currentSearch.concat(newQuery);
  selectedRating === null ? finalQuery = currentSearch : finalQuery = currentSearch.concat(newQuery);
  navigate(finalQuery);
  
}, [selectedRating]);
      
    

    return (
        <>
            {/* Star rating tab */}
            <div className='rating-tab'>

<p className='diff'>Rating</p>

{/* 5 star */}


<label className='diff-level' >
<input type='checkbox'  className='diff-option' onChange={handleCheckRating}  />
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
<input type='checkbox'  className='diff-option' onChange={handleCheckRating} />
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
<input type='checkbox'  className='diff-option' onChange={handleCheckRating}/>
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
<input type='checkbox'  className='diff-option' onChange={handleCheckRating} />
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
<input type='checkbox' className='diff-option' onChange={handleCheckRating} />
<p style={{display: "none"}}>1</p>

<div className='star-rat'>
<img src= {starColor} className='st-cl' alt='rating color'/>
<img src= {starBlank} className='st-cl' alt='rating color'/>
<img src= {starBlank} className='st-cl' alt='rating color'/>
<img src= {starBlank} className='st-cl' alt='rating color'/>
<img src= {starBlank} className='st-cl' alt='rating color'/>

</div>
    
</label>





</div> </>
    )
}

export default StarRating