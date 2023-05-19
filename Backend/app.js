require("dotenv").config();
const express = require("express"); //
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const userRoute = require('./routes/user');
const recipeModel = require('./models/recipe');
const ingredientModel = require('./models/ingredient');
const postModel = require('./models/post');
const ingredientRoute = require('./routes/ingredients');
const recipesRoute = require('./routes/recipes');
const cors = require('cors');
const fs = require('fs');
const MongoDBStore = require('connect-mongodb-session')(session);

mongoose.connect(`mongodb+srv://${process.env.USER_ATLAS}:${process.env.PASSWORD_ATLAS}@cluster0.uqccxfj.mongodb.net/recipeDB1?retryWrites=true&w=majority`)
.then(result => {
  console.log("Connect to MongoDB successfully");
  // importData();
})
.catch(err => {
  console.log(err)
});

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const store = new MongoDBStore({
  uri: `mongodb+srv://${process.env.USER_ATLAS}:${process.env.PASSWORD_ATLAS}@cluster0.uqccxfj.mongodb.net/recipeDB1?w=majority`,
  collection: 'sessions'
})

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    credentials: true,
    exposedHeaders: ["set-cookie"],
    allowedHeaders: ['Content-Type', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept'],
  };
app.use(cors(corsOptions));

// Create session
app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 24* 60 * 60 * 1000
    },
    store: store
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
  


mongoose.set('bufferCommands', false);


app.use('/api',userRoute);

app.use('/api',ingredientRoute);

app.use('/api',recipesRoute);

// const data = JSON.parse(fs.readFileSync('./util/recipes.json', 'utf-8'))

// console.log(data);


const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
    console.log(`Connected to port ${PORT}`);
});

