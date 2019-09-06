const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');


//Get all events
router.get('/', ctrl.events.index);

//Get event
router.get('/:id', ctrl.events.show);

//Create event
router.post('/', ctrl.events.create);


module.exports = router;