const express = require('express');
const ingredientController = require('../controllers/ingredients');

const router = express.Router();

router.route('/ingredient')
.get(ingredientController.getAllIngredients)
.post(ingredientController.postAllIngredient)
.delete(ingredientController.deleteAllIngredient);

module.exports = router;