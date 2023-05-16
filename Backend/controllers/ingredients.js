const ingredientModel = require('../models/ingredient');

exports.getAllIngredients = async (req, res) => {

    try {
        await ingredientModel.Ingredient.find({}).then(result => {
            res.status(200).json(result);
        }); 
    } catch (err) {
        res.status(500).json({message: "Internal error!"})
    }
};

exports.postAllIngredient = async (req, res) => {
    const name =req.body.name;
    const description = req.body.description;
    const nutrition = req.body.nutrition;

    const newIngredient = new ingredientModel.Ingredient({
        name: name,
        description: description,
        nutrition: nutrition
    });

    await newIngredient.save().catch(err => {
        console.log(err);
    });
};

exports.deleteAllIngredient = async (req, res) => {
    await ingredientModel.Ingredient.delete().catch(err => {
        console.log(err);
    })
};

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

exports.getSearchByIngredientName = async (req, res) => {
    try {
        let ingredients = await ingredientModel.Ingredient.aggregate([
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

        const response = {ingredients}

        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err.message});
    }
};

