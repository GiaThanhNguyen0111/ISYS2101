import React from 'react';
import RecipeItem from '../Components/RecipeItem';
import '../Css/page/recipe-detail.css';
import food from '../Image/img/recipe/salmon.jpg';
import {useParams} from "react-router-dom";

import recipesData from "../test-data/recipesData";

const RecipeDetail = () => {
    const {recipeId} = useParams()
    const thisRecipe = recipesData.find(rep => rep.id == recipeId)

    return (
        <>
        <h1>This is recipe Detail {thisRecipe.id}</h1>
        <h2>{thisRecipe.title}</h2>
        </>
    )
}


export default RecipeDetail;