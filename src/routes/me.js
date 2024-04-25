const express = require('express');
var router = express.Router();


const meController = require('../app/controllers/MeController.js');

router.get('/stored/album', meController.storedAlbum);
router.get('/trash/album', meController.trashAlbum);

module.exports = router;