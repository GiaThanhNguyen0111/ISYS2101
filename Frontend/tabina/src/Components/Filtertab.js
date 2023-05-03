import React from 'react'
import '../Css/filtertab.css'
import starBlank from '../Image/img/recipe/starBlank.png'
import starColor from '../Image/img/recipe/starColor.png'
import Searchbar from './Searchbar'


const Filtertab = () => {
    return (

        <>
        <Searchbar/>
        <div className='filter-tab'>
            {/* All the tab */}
        <div className='heading-tab'>  
            <p>Ingredients</p>
        </div>
        {/* Recipe tab */}
        <div>
            <p className='ingred'>Bread <span className='canc'>x</span></p>
            <p className='ingred'>Egg <span className='canc'>x</span></p>
            <p className='ingred'>Grape <span className='canc'>x</span></p>
        </div>
        <div className='heading-tab'>  
            <p>Filters</p>
        </div>
        <div>
            <p className='diff'>Difficulty</p>
            <label className='diff-level'>
                <input type='checkbox'  className='diff-option' />
                <span  className='class-lvl'>World Class</span>
            </label>
            <label className='diff-level'>
                <input type='checkbox' className='diff-option' />
                <span className='class-lvl'>Expert</span>
            </label>
            <label className='diff-level'>
                <input type='checkbox' className='diff-option' />
                <span className='class-lvl'>Intermidiate</span>
            </label>
            <label className='diff-level'>
                <input type='checkbox' className='diff-option' />
                <span className='class-lvl'>Average</span>
            </label>
            <label className='diff-level'>
                <input type='checkbox' className='diff-option' />
                <span className='class-lvl'>Beginner</span>
            </label>

        </div>
        <p className='sep-tab'>___________________________________</p>

        <div>
        <p className='diff'>Number of Ingredients</p>


        </div>
        <p className='sep-tab'>___________________________________</p>


        {/* Star rating tab */}
        <div className='rating-tab'>

        <p className='diff'>Rating</p>

        {/* 5 star */}


        <label className='diff-level'>
        <input type='checkbox'  className='diff-option' />

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
        <input type='checkbox'  className='diff-option' />

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
        <input type='checkbox'  className='diff-option' />

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
        <input type='checkbox'  className='diff-option' />

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
        <input type='checkbox' className='diff-option' />

        <div className='star-rat'>
        <img src= {starColor} className='st-cl' alt='rating color'/>
        <img src= {starBlank} className='st-cl' alt='rating color'/>
        <img src= {starBlank} className='st-cl' alt='rating color'/>
        <img src= {starBlank} className='st-cl' alt='rating color'/>
        <img src= {starBlank} className='st-cl' alt='rating color'/>

        </div>
            
        </label>

    
        


        </div> 
        {/* end rating tab */}

        <p className='sep-tab'>___________________________________</p>
       <div>
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
            


        </div>
        
       
        </>
    )
}

export default Filtertab