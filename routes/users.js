const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');


//Get all artists
router.get('/', ctrl.users.index);

//Get user
router.get('/:id', ctrl.users.show);

//Create City
// router.post('/', ctrl.city.create);


module.exports = router;