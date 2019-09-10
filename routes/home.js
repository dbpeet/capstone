const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//Get all users(will only be artists later), genres, and works. 
router.get('/', ctrl.home.index);

module.exports = router;