const Recipe = require('../models/recipe');
const recipe = require('./recipe');
const ingredientModel = require('../models/ingredient');
const ingredient = require('../models/ingredient');

exports.getAllRecipe = async (req, res) => {
    try {
        let ingredients = req.query.ingredients || "All";

        const ingredientOptions = [];

        ingredientModel.Ingredient.find({}, "name").then(
            results => {
                results.forEach(result => {
                    ingredientOptions.push(result);
                });
            }
        );

        ingredients === "All" ? (ingredients = [...ingredientOptions]) : (ingredients = req.query.ingredient);
        
        const recipes = await Recipe.Recipe.find({})
        .where("ingredients")
        .in([...ingredients]);

        const response = {recipes};

        res.status(200).json(response); 

    } catch (err) {
        console.log(err);
        res.status(500).json({error: true, message: "Internal Server Error"});
    }

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


// Unfinishing function

exports.postFilterByIngredient = (req, res) => {
    const array = [];

    var newArray = array.map((item) => {
        if (array.indexOf(item) === 0) {
            return '?ingredient='.concat(item, '&')
        } else if (array.indexOf(item) === array.length -1) {
            return 'ingredient='.concat(item);
        } else {
            return 'ingredient='.concat(item,"&");
        }
    });
    console.log(newArray);
    newArray = newArray.join('');
    res.redirect(`/recipe${newArray}`);
};

exports.postDeleteFilterByIngredient = (req, res) => {
    const ingredients = req.query.ingredient;
    const unChoseIngredient = req.body.ingredientName

    const array = ingredients.filter(ingredient => ingredient !== unChoseIngredient);

    var newArray = array.map((item) => {
        if (array.indexOf(item) === 0) {
            return '?ingredient='.concat(item, '&')
        } else if (array.indexOf(item) === array.length -1) {
            return 'ingredient='.concat(item);
        } else {
            return 'ingredient='.concat(item,"&");
        }
    });

    console.log(newArray);
    newArray = newArray.join('');
    res.redirect(`/recipe${newArray}`);

};


exports.getSearchByName = async (req, res) => {
    try {
        let result = await recipeModel.Recipe.aggregate([
            {
                "$search": {
                    "autocomplete": {
                        "query": `${req.query.name}`,
                        "path": "name",
                        "fuzzy": {
                            "maxEdits": 2
                        }
                    }
                }
            }
        ]);
        res.send(result);
    } catch (err) {
        console.log(err);
        res.status(500).send({message: err.message});
    }
};

exports.postSearchByName = async (req, res) => {
    const recipeName = req.body.name;

    const newQuery = "?name".concat(recipeName);

    res.redirect('/recipeDetail')

}