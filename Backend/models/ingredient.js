const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name: String,
    description: String,
    nutrition: String
});

const Ingredient = new mongoose.model("Ingredient", ingredientSchema);

module.exports = {
    ingredientSchema: ingredientSchema,
    Ingredient: Ingredient
};