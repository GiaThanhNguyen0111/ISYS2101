<<<<<<< HEAD
const User = require('../models/user');
const passport = require('passport');

exports.getRoot = (req, res) =>  {
    res.send("Hello");
};

exports.getUserLogin = (req, res) =>  {
    res.send("Login Page");
};

=======
const passport = require('passport');
const userModel = require('../models/user');
const ejs = require('ejs');

exports.getRoot = (req, res) => {
    res.send("Hello");
};

exports.getAuthGoogle = passport.authenticate("google", { scope: ['profile'] });

exports.postAuthGoogle = passport.authenticate("google", { failureRedirect: "/login" });


exports.getAuthFacebook = passport.authenticate("facebook");

exports.postAuthFacebook = passport.authenticate("facebook", { failureRedirect: "/login" });

exports.getRegister = (req, res) => {
    res.render('register')
};

exports.postRegister = (req, res) => {
    userModel.User.register({username: req.body.username}, req.body.password, function(err, user) {
        if(err) {
            console.log(err);
            res.redirect("/register");
        } else {
            passport.authenticate("local")(req, res, function(){
                res.redirect("/");
            })
        };
    })
};

exports.getLogin = (req, res) => {
    res.send("Login Page");
};


>>>>>>> f6891376dd3a0ae5e6e9701e1adbe649d87f8ec0
exports.postUserLogin = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

<<<<<<< HEAD
    const user = new User({
=======
    const user = new userModel.User({
>>>>>>> f6891376dd3a0ae5e6e9701e1adbe649d87f8ec0
        username: username,
        password: password
    });

    req.login(user, function(err) {
        if(err) {
            console.log(err);
        } else {
            passport.authenticate("local", {failureRedirect: "/login", failureMessage: true})(req, res, function(){
                res.redirect("/");
            })
        }
    });
};

<<<<<<< HEAD
exports.getUserLogout = (req, res) => {
=======
exports.getLogout = (req, res, next) => {
>>>>>>> f6891376dd3a0ae5e6e9701e1adbe649d87f8ec0
    req.logout(function(err) {
        if(err){
            return next(err);
        }
        res.redirect("/");
    });
};

<<<<<<< HEAD
exports.getUserRegister = (req, res) => {
    res.send("Register");
};

exports.postUserRegister = (req, res) => {
    User.register({username: req.body.username}, req.body.password, function(err, user) {
        if(err) {
            console.log(err);
            res.redirect("/register");
        } else {
            passport.authenticate("local")(req, res, function(){
                res.redirect("/")
            })
        }
    });
};

exports.getGoogleAuth = passport.authenticate("google", { scope: ['profile'] });

exports.postGoogleAuth = passport.authenticate("google", { failureRedirect: "/login" });


exports.getFacebookAuth = passport.authenticate("facebook");

exports.postFacebookAuth = passport.authenticate("facebook", { failureRedirect: "/login" });

=======


>>>>>>> f6891376dd3a0ae5e6e9701e1adbe649d87f8ec0

