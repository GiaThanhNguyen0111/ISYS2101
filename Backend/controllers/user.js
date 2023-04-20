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

exports.getUserRegister = (req, res) => {
    res.render('register')
};

exports.postUserRegister = async (req, res) => {
    await userModel.User.register({username: req.body.username}, req.body.password, function(err, user) {
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

exports.getUserLogin = (req, res) => {
    res.send("Login Page");
};


exports.postUserLogin = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = new userModel.User({
        username: username,
        password: password
    });

    req.login(user, async function(err) {
        if(err) {
            console.log(err);
        } else {
            await passport.authenticate("local", {failureRedirect: "/login", failureMessage: true})(req, res, function(){
                res.redirect("/");
            })
        }
    });
};

exports.getUserLogout = async (req, res, next) => {
    await req.logout(function(err) {
        if(err){
            return next(err);
        }
        res.redirect("/");
    });
};




