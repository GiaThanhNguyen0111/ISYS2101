const express = require('express');
const ingredientController = require('../controllers/ingredients');

const router = express.Router();

router.route('/ingredient')
.get(ingredientController.getAllIngredients)
.post(ingredientController.postAllIngredient)
.delete(ingredientController.deleteAllIngredient);


router.get('/searchIngredient', ingredientController.getSearchByIngredientName);

module.exports = router;