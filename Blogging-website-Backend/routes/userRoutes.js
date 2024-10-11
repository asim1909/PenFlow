const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');
const articlesController = require('../controllers/articlesController');

const verifyJWT = require("../middleware/verifyJWT");

//authentication
// /api/users/login
router.post('/users/login', userController.userLogin);


// /api/users
router.post('/users', userController.registerUser );

//get the current user
router.get('/user',verifyJWT, userController.getCurrentUser);

//update the user
//router.put('/users', userController.updateUser )

// router.get('/api/articles/feed', verifyJWT, articlesController.feedArticles);


//update the user
router.put('/user',verifyJWT, userController.updateUser);

router.get('/api/articles/feed', verifyJWT, articlesController.feedArticles);


module.exports = router;