const mongoose = require('mongoose');
<<<<<<< HEAD
const mealType = require('./meal');
=======
const mealType = require('./mealType');
>>>>>>> f6891376dd3a0ae5e6e9701e1adbe649d87f8ec0
const restriction = require('./restriction');
const method = require('./method');

const categorySchema = new mongoose.Schema({
    mealType: [mealType.mealTypeSchema],
    restriction: [restriction.restrictionSchema],
    method: [method.methodSchema],
});

const Category = new mongoose.model("Category", categorySchema);

<<<<<<< HEAD
module.exports = {
    Category: Category,
    categorySchema: categorySchema
};
=======

module.exports = {
    categorySchema: categorySchema,
    Category: Category,
}
>>>>>>> f6891376dd3a0ae5e6e9701e1adbe649d87f8ec0
