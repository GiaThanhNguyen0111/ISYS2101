const express = require('express');
const recipeController = require('../controllers/recipes');

const router = express.Router();

router.route('/recipe')
.get(recipeController.getAllRecipe)
.post(recipeController.postAddRecipe)
.delete(recipeController.deleteRecipe);

module.export = router;