const express = require('express');
const router = express.Router();
const projectsCtrl = require('../../controllers/api/projects');

// POST /api/projects
router.post('/', projectsCtrl.create);

router.get('/dashboard', projectsCtrl.getAll);

router.delete('/:id', projectsCtrl.findOneAndDelete);

module.exports = router;