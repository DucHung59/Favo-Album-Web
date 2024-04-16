const express = require('express');
var router = express.Router();

const courseController = require('../app/Controllers/CourseController.js');

router.get('/:slug', courseController.show);

module.exports = router;