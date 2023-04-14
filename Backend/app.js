require("dotenv").config();
const express = require("express"); //
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");
const FacebookStrategy = require("passport-facebook");
const userRouter = require('./routes/user');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

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
mongoose.connect('mongodb://127.0.0.1:27017/test');

app.use(userRouter);


// Schema for documents
// To validate email
// var validateEmail = function(email) {
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(email)
// };

// const mealTypeSchema = ({
//     name: String
// });
// const restrictionSchema = ({
//     name: String
// });
// const methodSchema = ({
//     name: String
// });

// const categorySchema = new mongoose.Schema({
//     mealType: [mealTypeSchema],
//     restriction: [restrictionSchema],
//     method: [methodSchema],
// });

// const ingredientSchema = new mongoose.Schema({
//     name: String,
//     description: String,
//     nutrition: String
// })

// const userSchema = new mongoose.Schema({
//     username: String,
//     password: String,
//     googleId: String,
//     facebookId: String,
//     email: {
//         type: String,
//         trim: true,
//         lowercase: true,
//         unique: true,
//         required: 'Email address is required',
//         validate: [validateEmail, 'Please fill a valid email address'],
//         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
//     },
//     DOB: String,
//     Phone: Number,
//     Address: String,
//     category: [categorySchema]
// });

// const recipeSchema = new mongoose.Schema({
//     name: String,
//     ingredient: [ingredientSchema],
//     level: {
//         type: Number,
//         min: 1,
//         max: 5
//     },
//     rating: {
//         type: Number,
//         min: 0,
//         max: 5
//     }
// });

// userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);



// const Recipe = new mongoose.model("Recipe", recipeSchema);
// const User = new mongoose.model("User", userSchema);
// const Ingredient = new mongoose.model("Ingredient", ingredientSchema);
// const Category = new mongoose.model("Category", categorySchema);
// const MealType = new mongoose.model('Meal_type', mealTypeSchema);
// const Restriction = new mongoose.model('Restriction', restrictionSchema);
// const Method = new mongoose.model('Method', methodSchema);

// passport.use(User.createStrategy());

// passport.serializeUser(function(user, done) {
//     done(null, user);
//   });
  
// passport.deserializeUser(function(user, done) {
//     done(null, user);
//   });

// // Use Google Strategy
// passport.use(new GoogleStrategy({
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     callbackURL: "http://localhost:3000/auth/google/secrets",
//     userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     console.log(profile);
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));

// // Use Facebook Strategy
// passport.use(new FacebookStrategy({
//     clientID: process.env.APP_ID,
//     clientSecret: process.env.APP_SECRET,
//     callbackURL: "http://localhost:3000/auth/facebook/secrets",
//     enableProof: true
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ facebookId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));


// // Routing
// app.get("/", function(req, res) {
//     res.send("Hello");
// })

// // Google Authentication

// app.get("/auth/google", passport.authenticate("google", { scope: ['profile'] }));

// app.get("/auth/google/secrets", 
//     passport.authenticate("google", { failureRedirect: "/login" }),
//     function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });


// // Facebook Authentication

// app.get('/auth/facebook',passport.authenticate('facebook'));

// app.get('/auth/facebook/secrets',
//     passport.authenticate('facebook', { failureRedirect: '/login' }),
//     function(req, res) {
//       // Successful authentication, redirect home.
//       res.redirect('/');
//     });


// // register

// app.get("/register", function(req, res) {
//     res.send("Register");
// });

// app.post("/register", function(req, res) {
//     User.register({username: req.body.username}, req.body.password, function(err, user) {
//         if(err) {
//             console.log(err);
//             res.redirect("/register");
//         } else {
//             passport.authenticate("local")(req, res, function(){
//                 res.redirect("/")
//             })
//         }
//     })
// });

// // login

// app.get("/login", function(req, res) {
//     res.send("Login Page");
// });

// app.post("/login", function(req, res) {
//     const username = req.body.username;
//     const password = req.body.password;

//     const user = new User({
//         username: username,
//         password: password
//     });

//     req.login(user, function(err) {
//         if(err) {
//             console.log(err);
//         } else {
//             passport.authenticate("local", {failureRedirect: "/login", failureMessage: true})(req, res, function(){
//                 res.redirect("/");
//             })
//         }
//     });
// });


// //log out

// app.get("/logout", function(req, res) {
//     req.logout(function(err) {
//         if(err){
//             return next(err);
//         }
//         res.redirect("/");
//     });
// })
// // Test connection to Frontend
// app.post("/post", function(req, res) {
//     console.log("Connected to React");
//   res.redirect("/");
// })


const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
    console.log(`Connected to port ${PORT}`);
});

