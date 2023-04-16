const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name: String,
    description: String,
    nutrition: String
});

const Recipe = new mongoose.model("Recipe", recipeSchema);

module.exports = {
    ingredientSchema: ingredientSchema,
    Recipe: Recipe
};