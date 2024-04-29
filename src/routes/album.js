const express = require('express');
var router = express.Router();


const albumController = require('../app/controllers/AlbumController.js');

router.get('/create', albumController.create);
router.post('/store', albumController.store);
router.get('/:id/edit', albumController.edit);
router.post('/form-actions/', albumController.formActions);
router.put('/:id', albumController.update);
router.patch('/:id/restore', albumController.restore);
router.delete('/:id', albumController.delete);
router.get('/:slug', albumController.show);

module.exports = router;