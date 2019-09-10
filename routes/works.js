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

//Delete work
router.delete('/:id', ctrl.works.deleteOne)

//Edit work
router.put('/:id', ctrl.works.edit);

//Delete all works
//router.purge('/deleteEveryWork', ctrl.works.deleteAll)


module.exports = router;