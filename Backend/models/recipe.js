const mongoose = require('mongoose');
const ingredient = require('./ingredient');


const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: [ingredient.ingredientSchema],
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
    recipeSchema: recipeSchema,
    Recipe: Recipe
};
