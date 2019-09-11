const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');


//Get all genres
router.get('/', ctrl.genres.index);

//Get genre
router.get('/:id', ctrl.genres.show);

//Create Genre
router.post('/', ctrl.genres.create);

//Create Genre
router.post('/', ctrl.genres.edit);


module.exports = router;