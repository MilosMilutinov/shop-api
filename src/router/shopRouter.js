const express = require("express");

const appRoute = require('../controllers/shopController');

const router = express.Router();

router.get('/', appRoute.getAll);
router.get('/:name', appRoute.getSpecShop);
router.post('/', appRoute.createShop);
module.exports = router;