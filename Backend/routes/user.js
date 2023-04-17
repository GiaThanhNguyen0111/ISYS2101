const express = require('express');

const router = express.Router();
const userController = require('../controllers/user');

router.get('/', userController.getRoot);

router.get('/auth/google', userController.getAuthGoogle);

router.get('/auth/google/secrets', userController.postAuthGoogle, function(req, res) {
    res.redirect('/');
});


router.get('/auth/facebook', userController.getAuthFacebook);

router.get('/auth/facebook/secrets', userController.postAuthFacebook, function(req, res) {
    res.redirect('/');
});


router.get('/register', userController.getRegister);

router.post('/register', userController.postRegister);

router.get('/login', userController.getLogin);

router.post('/login', userController.postUserLogin);

router.get('/logout', userController.getLogout);


module.exports = router;
