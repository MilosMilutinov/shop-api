const express = require("express");

const appRoute = require('../controllers/categoryController.js');

const router = express.Router();

router.get('/', appRoute.getAll);
router.get('/:name', appRoute.getSpecCategory);
router.post('/', appRoute.createCategory);

module.exports = router;