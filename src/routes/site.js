const express = require('express');
var router = express.Router();

const siteController = require('../app/Controllers/SiteController');


router.get('/albums', siteController.album)
router.get('/', siteController.index);

module.exports = router;