const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');


//Get all workss
router.get('/', ctrl.works.index);

//Get user
router.get('/:id', ctrl.works.show);

//Create work
router.post('/', ctrl.works.create);


module.exports = router;