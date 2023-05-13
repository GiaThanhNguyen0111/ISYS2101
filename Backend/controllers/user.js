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
    var currentUser = new userModel.User({
        username: req.body.username,
        googleId: req.body.googleId,
        facebookId: req.body.facebookId,
        fullName: req.body.fullName,
        DOB: req.body.DOB,
        Phone: req.body.phoneNumber,
        Address: req.body.address
    })

    await userModel.User.register(currentUser, req.body.password, function(err, user) {
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
                console.log("login Successfully");
                console.log(req.session.passport);
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

exports.findUserById = async (req, res, next) => {
    const userId = req.session.passport.user._id;

    await userModel.User.find({_id: userId}).then(result => {
        const response = {result};

        res.status(200).json(response);
    }). catch(err => {
        res.status(500).json({message: err.message});
    })
}

exports.updateUserInformation = async (req, res, next) => {
    const userId = req.session.passport.user._id;
    const DOB = req.body.date_of_birth;
    const Address = req.body.address;

    await userModel.User.findOneAndUpdate({_id: userId}, {
        DOB: DOB,
        Address: Address
    }). then(response => {
        console.log(response);
        res.redirect('/accpersonalInfo')
    }).catch(err => {
        console.log(err);
    });
};




