const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');


//Get all genres
router.get('/', ctrl.genres.index);

//Get genre
router.get('/:id', ctrl.genres.show);

//Create City
router.post('/', ctrl.genres.create);


module.exports = router;