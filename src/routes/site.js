const express = require('express');
var router = express.Router();

const siteController = require('../app/Controllers/SiteController');

router.use('/search', siteController.search);
router.use('/news', siteController.news)
router.use('/', siteController.index);

module.exports = router;