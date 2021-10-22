const express = require("express");

const appRoute = require('../controllers/itemController');

const router = express.Router();

router.get('/', appRoute.getAll);
router.get('/:name', appRoute.getItemByName);
router.post('/', appRoute.createItem);
router.put('/:name', appRoute.updateItem);
router.delete('/:name', appRoute.deleteItem);

module.exports = router;