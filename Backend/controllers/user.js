const User = require('../models/user');
const passport = require('passport');

exports.getRoot = (req, res) =>  {
    res.send("Hello");
};

exports.getUserLogin = (req, res) =>  {
    res.send("Login Page");
};

exports.postUserLogin = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = new User({
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

exports.getUserLogout = (req, res) => {
    req.logout(function(err) {
        if(err){
            return next(err);
        }
        res.redirect("/");
    });
};

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


