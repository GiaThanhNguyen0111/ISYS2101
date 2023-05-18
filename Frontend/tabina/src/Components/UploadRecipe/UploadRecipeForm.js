import React from 'react'
import '../../Css/page/uploadRecipe/uploadrecipeform.css'

function UploadRecipeForm() {
  return (
    <div className='upload-recipe-form-container'>
        <div className='upload-recipe-form-heading'>Recipe Details</div>

        <form className='upload-recipe-form-form'>
            <div className='upload-recipe-label-input'>
                <label>Recipe name :</label>
                <input className='upload-recipe-input-box' type='text' placeholder='e.g. Banana Bread'></input>
            </div>
            
            <div className='upload-recipe-label-input'>
                <label>Ingredients :</label>
                <input className='upload-recipe-input-box' type='text' placeholder='e.g banana, bread, milk, sugar'></input>
            </div>

            <div className='upload-recipe-label-input'>
                <label>Cooking Instruction :</label>
                <input className='upload-recipe-input-box' type='text' placeholder='e.g. Step 1: Buy banana, Step 2: Buy Bread, Step 3: Cook'></input>
            </div>    
            
            {/* <div className='upload-recipe-label-input'>
                <label>Meal type :</label>
                <input className='upload-recipe-input-box' type='text' placeholder='e.g. Appetizer, Dessert'></input>
            </div>    

            <div className='upload-recipe-label-input'>
                <label>Category :</label>
                <input className='upload-recipe-input-box' type='text' placeholder='e.g. Vegan'></input>
            </div> */}

            <div className='upload-recipe-label-input'> 
                <label>Level :</label>
                <select className='upload-recipe-input-box'>
                    <option>World Class</option>
                    <option>Expert</option>
                    <option>Intermediate</option>
                    <option>Average</option>
                    <option>Beginner</option>
                    <option>None</option>
                </select>
            </div>

            <button className='recipe-upload-btn'>Upload</button>
        </form>
    </div>
  )
}

export default UploadRecipeForm