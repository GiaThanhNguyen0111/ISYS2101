require("dotenv").config();
const express = require("express"); //
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const findOrCreate = require("mongoose-findorcreate");
// const FacebookStrategy = require("passport-facebook");
const userRoute = require('./routes/user');
const Recipe = require('./models/recipe');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
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

Recipe.Recipe;


const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
    console.log(`Connected to port ${PORT}`);
});


app.get("/test", (req, res) => {
    const query = req.query.ingredient;

    console.log(query);
})
