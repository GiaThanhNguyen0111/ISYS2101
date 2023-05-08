const recipeModel = require('../models/recipe');
const ingredientModel = require('../models/ingredient');
const { isString } = require('lodash');


exports.getAllRecipe = async (req, res) => {
    try {
        let ingredients = req.query.ingredient || "All";
        isString(ingredients) ? ingredients = ingredients.split() : ingredients = ingredients;
        let level = req.query.level || "All";
        let rating = req.query.rating || "All";
        let sort = req.query.sort || 'rating';
        const ingredientOptions = [];
        console.log(isString(ingredients));
        console.log(ingredients);
        

        level === "All" ? (level = 0) : (level = req.query.level);
        rating === "All" ? (rating = 0 ) : (rating = req.query.rating);
        req.query.sort ? (sort = req.query.sort ) : (sort = [sort]);

        let sortBy  = {};

        if (sort[1]) {
            sortBy[sort[0]] = sort[1];
        } else {
            sortBy[sort[0]] = 1;
        };

        const aggregate = [
            {$match: {"rating": {$gte: rating}}},
            {$match: {"level": {$gte: level}}},
            {$sort: sortBy},
            {$limit: 100},
            !(ingredients === "All") ? {$match: {"ingredients": {$in: [...ingredients]}}} : null
        ].filter(Boolean);

        var recipes = await recipeModel.Recipe.aggregate(aggregate);

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
    } else if (currentRoute === `/recipe/${prodId}`) {
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
    const url = req.url;

    var query = url.slice(url.indexOf('?') + 1, url.length);
    req.query ? query = '' : query = url.slice(url.indexOf('?') + 1, url.length);

    const array = [];

    var newArray = array.map((item) => {
        if (array.indexOf(item) === 0) {
            if (!req.query) {
                return '?ingredient='.concat(item, '&');
            } else {
                return 'ingredient='.concat(item, '&');
            }
        } else if (array.indexOf(item) === array.length -1) {
            return 'ingredient='.concat(item);
        } else {
            return 'ingredient='.concat(item,"&");
        };
    });
    console.log(newArray);
    newArray = newArray.join('');
    res.redirect(`/recipe${query}${newArray}`);
};

exports.postDeleteFilterByIngredient = (req, res) => {
    const ingredients = req.query.ingredient;
    const unChoseIngredient = req.body.ingredientName;

    const url = req.url;

    var query = url.slice(url.indexOf('?') + 1, url.length);
    req.query ? query = '' : query = url.slice(url.indexOf('?') + 1, url.length);

    const array = ingredients.filter(ingredient => ingredient !== unChoseIngredient);

    var newArray = array.map((item) => {
        if (array.indexOf(item) === 0) {
            if (!req.query) {
                return '?ingredient='.concat(item, '&');
            } else {
                return '&ingredient='.concat(item, '&')
            }
        } else if (array.indexOf(item) === array.length -1) {
            return 'ingredient='.concat(item);
        } else {
            return 'ingredient='.concat(item,"&");
        }
    });

    console.log(newArray);
    newArray = newArray.join('');
    res.redirect(`/recipe${query}${newArray}`);

};


exports.getSearchByName = async (req, res) => {
    try {
        let recipes = await recipeModel.Recipe.aggregate([
            {
                "$search": {
                    "autocomplete": {
                        "query": `${req.query.name}`,
                        "path": "name",
                        "fuzzy": {
                            "maxEdits": 2
                        },
                    }
                }
            }
        ]).limit(10);

        const response = {recipes}

        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err.message});
    }
};

exports.postSearchByName = async (req, res) => {
    const recipeName = req.body.name;

    const newQuery = "?name=".concat(recipeName);
    req.query ? newQuery = "&name=".concat(recipeName) : newQuery = "?name=".concat(recipeName);
    const url = req.url;

    var query = url.slice(url.indexOf('?') + 1, url.length);
    req.query ? query = '' : query = url.slice(url.indexOf('?') + 1, url.length);

    res.redirect(`/recipe${query}${newQuery}`);
};

exports.postFilterByLevel = (req, res) => {
    const url = req.url;

    var query = url.slice(url.indexOf('?') + 1, url.length);
    req.query ? query = '' : query = url.slice(url.indexOf('?') + 1, url.length);

    const chosenLevel = req.body.level;

    const newQuery = "?level=".concat(chosenLevel);

    req.query ? newQuery = "&level=".concat(chosenLevel) : "?level=".concat(chosenLevel);

    res.redirect(`/recipe${query}${newQuery}`);
};

exports.postFilterByRating = (req, res) => {
    const url = req.url;

    var query = url.slice(url.indexOf('?') + 1, url.length);
    req.query ? query = '' : query = url.slice(url.indexOf('?') + 1, url.length);

    const chosenRating = req.body.rating;

    const newQuery = "?level=".concat(chosenRating);

    req.query ? newQuery = "&level=".concat(chosenRating) : "?level=".concat(chosenRating);

    res.redirect(`/recipe${query}${newQuery}`);
};