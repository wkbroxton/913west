const express = require('express');
const router = express.Router();
const colorsCtrl = require('../../controllers/api/colors');

// POST /api/colors
router.post('/', colorsCtrl.searchColors);

module.exports = router;