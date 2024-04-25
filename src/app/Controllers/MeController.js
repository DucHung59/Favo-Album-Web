const Album = require('../model/Album');

const { mutlipleMongooseToObject } = require('../../util/mongoose')

class MeController {
    async storedAlbum(req, res, next) {
        Album.find({})
            .then(album => res.render('me/stored-album', {
                album: mutlipleMongooseToObject(album)
            }))
            .catch(next)
    }
    async trashAlbum(req, res, next) {
        Album.findWithDeleted({ deleted: true })
            .then(album => res.render('me/trash-album', {
                album: mutlipleMongooseToObject(album)
            }))
            .catch(next)
    }
}

module.exports = new MeController();