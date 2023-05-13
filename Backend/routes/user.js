const express = require('express');
const userController = require('../controllers/user');
// const { getUserLogin, postUserLogin, getUserRegister, postUserRegister, getUserLogout } = require('../models/user');
const isLoggedIn = require('../controllers/session');

const router = express.Router();
// GET: root
router.get("/", userController.getRoot);

// GET: login page
router.get('/login', userController.getUserLogin);
// POST data.
router.post('/login', userController.postUserLogin);

// GET: Register page.
router.get('/register', userController.getUserRegister);
// POST: Registered data. 
router.post('/register', userController.postUserRegister);

router.get('/logout', userController.getUserLogout);

router.get("/auth/google", userController.getAuthGoogle);
router.post("/auth/google/secrets", userController.postAuthGoogle, function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

router.get("/auth/facebook", userController.getAuthFacebook);
router.post("/auth/google/facebook", userController.postAuthFacebook, function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

router.patch('/updateUserInfo', isLoggedIn, userController.updateUserInformation);

router.get('/userInfo', isLoggedIn, userController.findUserById);

router.get('/posts');
router.post('/post');
router.patch('/post/:postId');
router.delete('/post');





module.exports = router;



