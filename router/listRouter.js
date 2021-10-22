const express = require("express");

const appRoute = require('../controllers/listController.js');

const router = express.Router();

router.get('/', appRoute.getAll);
router.get('/:name', appRoute.getListByName);
router.post('/', appRoute.createList);
router.put('/:name', appRoute.updateList);
router.delete('/:name', appRoute.deleteList);

module.exports = router;