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


exports.postUserLogin = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = new userModel.User({
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

exports.getLogout = (req, res, next) => {
    req.logout(function(err) {
        if(err){
            return next(err);
        }
        res.redirect("/");
    });
};




