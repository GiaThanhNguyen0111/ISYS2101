const express = require("express"); //
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// DB
mongoose.connect('mongodb://127.0.0.1:27017/test');
// Schema for documents
// To validate email
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const mealTypeSchema = ({
    name: String
});
const restrictionSchema = ({
    name: String
});
const methodSchema = ({
    name: String
});

const categorySchema = mongoose.Schema({
    mealType: [mealTypeSchema],
    restriction: [restrictionSchema],
    method: [methodSchema],
});

const ingredientSchema = mongoose.Schema({
    name: String,
    description: String,
    nutrition: String
})

const userSchema = mongoose.Schema({
    userName: String,
    password: String,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    DOB: String,
    Phone: Number,
    Address: String,
    category: [categorySchema]
});

const recipeSchema = mongoose.Schema({
    name: String,
    ingredient: [ingredientSchema],
    level: {
        type: Number,
        min: 1,
        max: 5
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    }
});

const recipe = mongoose.model("recipe", recipeSchema);
const user = mongoose.model("user", userSchema);
const ingredient = mongoose.model("ingredient", ingredientSchema);
const category = mongoose.model("category", categorySchema);
const mealType = mongoose.model('meal_type', mealTypeSchema);
const restriction = mongoose.model('restriction', restrictionSchema);
const method = mongoose.model('method', methodSchema);

// Routing
app.get("/", function(req, res) {
    res.send("Hello");
})

// Test connection to Frontend
app.post("/post", function(req, res) {
    console.log("Connected to React");
  res.redirect("/");
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
    console.log(`Connected to port ${PORT}`);
})

