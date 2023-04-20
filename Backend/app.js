require("dotenv").config();
const express = require("express"); //
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const userRoute = require('./routes/user');
const recipeModel = require('./models/recipe');
const ingredientRoute = require('./routes/ingredients');
const recipesRoute = require('./routes/recipes');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.set('view engine', 'ejs');
// Create session
app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
}));

//Initialize passport and use session
app.use(passport.initialize());
app.use(passport.session());


// DB
mongoose.connect(`mongodb+srv://${process.env.USER_ATLAS}:${process.env.PASSWORD_ATLAS}@cluster0.uqccxfj.mongodb.net/?retryWrites=true&w=majority`);


app.use(userRoute);

app.use(ingredientRoute);

app.use(recipesRoute);

// Recipe.Recipe;


app.get('/test', async function(req, res, next) {

  });
app.post('/test', function(req, res, next) {
    const array = ['onion','pepper', 'thanh'];
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
    res.redirect(`/test${newArray}`);
  });


const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
    console.log(`Connected to port ${PORT}`);
});

