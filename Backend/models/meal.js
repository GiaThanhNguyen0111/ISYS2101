const mongoose = require('mongoose');

const mealTypeSchema = ({
    name: String
});

const MealType = new mongoose.model('Meal_type', mealTypeSchema);

module.exports = {
    mealTypeSchema: mealTypeSchema,
    MealType: MealType
};