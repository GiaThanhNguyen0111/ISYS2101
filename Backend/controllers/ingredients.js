const ingredient = require('../models/ingredient');

exports.getAllIngredients = async (req, res) => {
    await ingredient.Ingredient.find({}).then(result => {
        console.log(result);
    });
};

exports.postAllIngredient = async (req, res) => {
    const name =req.body.name;
    const description = req.body.description;
    const nutrition = req.body.nutrition;

    const newIngredient = new ingredient.Ingredient({
        name: name,
        description: description,
        nutrition: nutrition
    });

    await newIngredient.save().catch(err => {
        console.log(err);
    });
};

exports.deleteAllIngredient = async (req, res) => {
    await ingredient.Ingredient.delete().catch(err => {
        console.log(err);
    })
}