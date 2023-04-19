const Recipe = require('../models/recipe');


exports.getAllRecipe = async (req, res) => {
    await Recipe.Recipe.find({}).then(results => {
        console.log(results);
    }).catch(err => {
        console.log(err);
    })
};

exports.postAddRecipe = async (req, res) => {
    const prodId = req.params.productId;
    const recipeName = req.body.recipeName;
    const ingredients = req.body.ingredients;
    const level = req.body.level;
    const rating = req.body.rating;

    const currentRoute = req.route.path;
    
    if ( currentRoute === '/recipe') {
        const newRecipe = new Recipe.Recipe ({
            name: recipeName,
            ingredients: ingredients,
            level: level,
            rating: rating
        });
    
        await newRecipe.save().catch(err => {
            console.log(err);
        });
    } else if (currentRoute === `/recipe/${prodId0}`) {
        const productId = req.body.productId;
        await Recipe.Recipe.updateOne({_id: productId}, 
            { $set: {
                name: recipeName,
                ingredients: ingredients,
                level: level,
                rating: rating
            }}
        )
    }
};



exports.deleteRecipe = async (req, res) => {
    await Recipe.Recipe.delete().then(() => {
        res.redirect('/recipe');
    }).catch(err => {
        console.log(err);
    });
};