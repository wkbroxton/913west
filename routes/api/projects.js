const express = require('express');
const router = express.Router();
const projectsCtrl = require('../../controllers/api/projects');

// POST /api/colors
router.post('/', projectsCtrl.create);

router.get('/', projectsCtrl.getAll);

module.exports = router;