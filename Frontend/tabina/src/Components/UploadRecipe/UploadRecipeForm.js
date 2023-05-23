import axios from 'axios';
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import '../../Css/page/uploadRecipe/uploadrecipeform.css'

function UploadRecipeForm() {

    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instruction, setInstruction] = useState('');
    const [level, setLevel] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleIngredientsChange = (e) => {
        setIngredients(e.target.value);
    };
    const handleInstructionChange = (e) => {
        setInstruction(e.target.value);
    };
    const handleLevelChange = (e) => {
        setLevel(e.target.value);
    };

    axios.defaults.withCredentials =true;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://damp-anchorage-45936.herokuapp.com/api/post', {
            title: title,
            ingredients: ingredients,
            instruction: instruction,
            level: level
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            withCredentials: true
        }).then(respsonse => {
            console.log(respsonse);
        }).then(() => {
            console.log("Uploaded");
        }).catch(err => {
            console.log(err);
        })
    };



  return (
    <div className='upload-recipe-form-container'>
        <div className='upload-recipe-form-heading'>Recipe Details</div>

        <form className='upload-recipe-form-form' onSubmit={handleSubmit}>
            <div className='upload-recipe-label-input'>
                <label>Recipe name :</label>
                <input className='upload-recipe-input-box' type='text' placeholder='e.g. Banana Bread' value={title} onChange={handleTitleChange}></input>
            </div>
            
            <div className='upload-recipe-label-input'>
                <label>Ingredients :</label>
                <input className='upload-recipe-input-box' type='text' placeholder='e.g banana, bread, milk, sugar' value={ingredients} onChange={handleIngredientsChange}></input>
            </div>

            <div className='upload-recipe-label-input'>
                <label>Cooking Instruction :</label>
                <input className='upload-recipe-input-box' type='text' placeholder='e.g. Step 1: Buy banana, Step 2: Buy Bread, Step 3: Cook' value={instruction} onChange={handleInstructionChange}></input>
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
                <select className='upload-recipe-input-box' value={level} onChange={handleLevelChange}>
                    <option value='World Class'>World Class</option>
                    <option value='Expert'>Expert</option>
                    <option value='Intermediate'>Intermediate</option>
                    <option value='Average'>Average</option>
                    <option value='Beginner'>Beginner</option>
                    <option value='None'>None</option>
                </select>
            </div>

            <button type='submit' className='recipe-upload-btn'>Upload</button>
        </form>
    </div>
  )
}

export default UploadRecipeForm