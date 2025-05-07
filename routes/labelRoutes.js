const express = require('express');
const router = express.Router();
const labelController = require('../controllers/labelController');

router.post('/labels', labelController.createLabel);
router.get('/labels', labelController.getLabels);

module.exports = router;
