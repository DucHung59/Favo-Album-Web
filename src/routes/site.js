const express = require('express');
var router = express.Router();

const siteController = require('../app/Controllers/SiteController');

router.get('/search', siteController.search);
router.get('/news', siteController.news)
router.get('/', siteController.index);

module.exports = router;