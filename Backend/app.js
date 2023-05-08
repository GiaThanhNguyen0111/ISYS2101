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
const querystring = require('node:querystring');
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
mongoose.connect(`mongodb+srv://${process.env.USER_ATLAS}:${process.env.PASSWORD_ATLAS}@cluster0.uqccxfj.mongodb.net/recipeDB?retryWrites=true&w=majority`)
.then(result => {
    console.log(result);
})
.catch(err => {
    console.log(err)
});


app.use(userRoute);

app.use(ingredientRoute);

app.use(recipesRoute);


const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
    console.log(`Connected to port ${PORT}`);
});

