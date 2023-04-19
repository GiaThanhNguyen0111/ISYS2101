const mongoose = require('mongoose');
const mealType = require('./mealType');
const restriction = require('./restriction');
const method = require('./method');

const categorySchema = new mongoose.Schema({
    mealType: [mealType.mealTypeSchema],
    restriction: [restriction.restrictionSchema],
    method: [method.methodSchema],
});

const Category = new mongoose.model("Category", categorySchema);


module.exports = {
    categorySchema: categorySchema,
    Category: Category,
}
