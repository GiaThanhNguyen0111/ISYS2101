const recipeModel = require('../models/recipe');

exports.selectedIngredients = [];

exports.postSortByIngredient = async (req, res) => {
    const listOfIngredients = req.body.ingredient;

    selectedIngredient.push(listOfIngredients);

    res.ridirect('/recipe?sortedByIngredient=true');
}

