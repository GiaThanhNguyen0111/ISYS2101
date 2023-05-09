const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name: String,
}
);

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

Ingredient.createCollection();
module.exports = {
    ingredientSchema: ingredientSchema,
    Ingredient: Ingredient
};