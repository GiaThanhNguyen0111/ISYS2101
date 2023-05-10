const mongoose = require('mongoose');
// const ingredient = require('./ingredient');


const recipeSchema = new mongoose.Schema({
    name: String,
    image_url: String,
    ingredients: Array,
    cooking_directions: String,
    nutritions: Array,
    level: Number,
    rating: Number
});

const Recipe = mongoose.model("Recipe", recipeSchema);

Recipe.createCollection();

module.exports = {
    recipeSchema: recipeSchema,
    Recipe: Recipe
};
