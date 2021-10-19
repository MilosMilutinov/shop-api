const express = require("express");

const appRoute = require('../controllers/itemController');

const router = express.Router();

router.get('/', appRoute.getAll);
router.get('/:name', appRoute.getSpecItem);
router.post('/', appRoute.createItem);
router.post('/:name', appRoute.updateItem);
router.post('/:name', appRoute.deleteItem);

module.exports = router;