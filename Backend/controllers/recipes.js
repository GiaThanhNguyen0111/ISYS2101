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
        let name = req.query.name;
        console.log(isString(ingredients));
        console.log([...ingredients]);

        

        level === "All" ? (level = 0) : (level = Number(req.query.level));
        rating === "All" ? (rating = 0 ) : (rating = Number(req.query.rating));
        req.query.sort ? (sort = req.query.sort ) : (sort = [sort]);

        let sortBy  = {};

        if (sort[1]) {
            sortBy[sort[0]] = sort[1];
        } else {
            sortBy[sort[0]] = 1;
        };

        const aggregate = [
            name ? {
                "$search": {
                    "autocomplete": {
                        "query": `${req.query.name}`,
                        "path": "name",
                        "fuzzy": {
                            "maxEdits": 2
                        },
                    }
                }
            } : null,
            {$match: {"rating": {$gte: rating}}},
            {$match: {"level": {$gte: level}}},
            {$sort: sortBy},
            {$limit: 100},
            !(ingredients == "All") ? {$match: {"ingredients": {$in: [...ingredients]}}} : null
        ].filter(Boolean);
        console.log(aggregate);
        const recipes = await recipeModel.Recipe.aggregate(aggregate);

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


// exports.getSearchByName = async (req, res) => {
//     try {
//         let recipes = await recipeModel.Recipe.aggregate([
//             {
//                 "$search": {
//                     "autocomplete": {
//                         "query": `${req.query.name}`,
//                         "path": "name",
//                         "fuzzy": {
//                             "maxEdits": 2
//                         },
//                     }
//                 }
//             }
//         ]).limit(10);

//         const response = {recipes}

//         res.status(200).json(response);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({message: err.message});
//     }
// };

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

exports.getRecipeById = async (req, res) => {
    const recipeId = req.query.recipeID;
    try {
        let recipes = await recipeModel.Recipe.find({_id: recipeId});
        
        const response = {recipes}
        console.log(response);
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err.message});
    }
}