const Album = require('../model/Album');

const { mutlipleMongooseToObject } = require('../../util/mongoose')

class MeController {
    async storedAlbum(req, res, next) {
        Album.find({})
            .then(albums => res.render('me/stored-album', {
                albums: mutlipleMongooseToObject(albums)
            }))
            .catch(next)
    }
}

module.exports = new MeController();