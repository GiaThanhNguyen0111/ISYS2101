require("dotenv").config();
const express = require("express"); //
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const userRoute = require('./routes/user');
const recipeModel = require('./models/recipe');
const ingredientModel = require('./models/ingredient');
const ingredientRoute = require('./routes/ingredients');
const recipesRoute = require('./routes/recipes');
const cors = require('cors');
// const fs = require('fs');

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
const importData = async () => {
    try {
      await recipeModel.Recipe.insertMany(data)
      console.log('data successfully imported')
      // to exit the process
      process.exit()
    } catch (error) {
      console.log('error', error)
    }
  }
  

mongoose.connect(`mongodb+srv://${process.env.USER_ATLAS}:${process.env.PASSWORD_ATLAS}@cluster0.uqccxfj.mongodb.net/recipeDB1?retryWrites=true&w=majority`)
.then(result => {
    console.log("Connect to MongoDB successfully")
})
.catch(err => {
    console.log(err)
});

mongoose.set('bufferCommands', false);


app.use(userRoute);

app.use(ingredientRoute);

app.use(recipesRoute);

// const data = JSON.parse(fs.readFileSync('./util/recipes.json', 'utf-8'))

// console.log(data)


const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
    console.log(`Connected to port ${PORT}`);
});

