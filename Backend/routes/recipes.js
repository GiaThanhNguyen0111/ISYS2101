const express = require('express');
const recipeController = require('../controllers/recipes');

const router = express.Router();

router.route('/recipe')
.get(recipeController.getAllRecipe)
.post(recipeController.postAddRecipe)
.delete(recipeController.deleteRecipe);

router.get('/search', recipeController.getSearchByName);

router.post('/search', recipeController.postSearchByName);

router.get('/getRecipeDetail', recipeController.getrecipeById);

module.exports = router;