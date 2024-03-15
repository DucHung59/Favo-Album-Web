const express = require('express');
var router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.use('/search', siteController.search);
router.use('/news', siteController.news)
router.use('/', siteController.index);

module.exports = router;