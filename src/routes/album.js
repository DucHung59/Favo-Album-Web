const express = require('express');
var router = express.Router();


const albumController = require('../app/controllers/AlbumController.js');

router.get('/create', albumController.create);
router.post('/store', albumController.store);
router.get('/:id/edit', albumController.edit);
router.put('/:id', albumController.update);
router.get('/:slug', albumController.show);

module.exports = router;