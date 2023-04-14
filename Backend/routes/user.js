const express = require('express');
const userController = require('../controllers/user');
const { getUserLogin, postUserLogin, getUserRegister, postUserRegister, getUserLogout } = require('../models/user');

const router = express.Router();

router.get("/", userController.getRoot);
router.get('/login', userController.getUserLogin);
router.post('/login', userController.postUserLogin);

router.get('/register', userController.getUserRegister);
router.post('/register', userController.postUserRegister);

router.get('/logout', userController.getUserLogout);

router.get("/auth/google", userController.getGoogleAuth);
router.post("/auth/google/secrets", userController.postGoogleAuth, function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

router.get("/auth/facebook", userController.getFacebookAuth);
router.post("/auth/google/facebook", userController.postFacebookAuth, function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

module.exports = router;



