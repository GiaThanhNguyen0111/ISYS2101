const mongoose = require('mongoose');
const ingredient = require('./ingredient');


const recipeSchema = new mongoose.Schema({
    name: String,
    ingredients: Array,
    cooking_directions: String,
    nutritions: Array,
    level: Number,
    rating: Number
});

const Recipe = new mongoose.model("Recipe", recipeSchema);



module.exports = {
    recipeSchema: recipeSchema,
    Recipe: Recipe
};
