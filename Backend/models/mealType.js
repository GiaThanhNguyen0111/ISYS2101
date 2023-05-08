const mongoose = require('mongoose');

const mealTypeSchema = ({
    name: String
});

const MealType = mongoose.model('Meal_type', mealTypeSchema);

MealType.createCollection();

module.exports = {
    mealTypeSchema: mealTypeSchema,
    MealType: MealType
}