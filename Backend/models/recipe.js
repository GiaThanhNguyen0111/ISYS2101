const mongoose = require('mongoose');
const ingredient = require('./ingredient');

const recipeSchema = new mongoose.Schema({
    name: String,
    ingredient: [ingredient.ingredientSchema],
    level: {
        type: Number,
        min: 1,
        max: 5
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    }
});

const Recipe = new mongoose.model("Recipe", recipeSchema);

module.exports = {
    ingredientSchema: ingredientSchema,
    Recipe: Recipe
};
