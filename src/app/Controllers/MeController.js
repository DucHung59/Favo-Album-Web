const Album = require('../model/Album');

const { mutlipleMongooseToObject } = require('../../util/mongoose')

class MeController {
    async storedAlbum(req, res, next) {
        Promise.all([Album.find({}), Album.countDocumentsWithDeleted({deleted: true})])
            .then(([album, count]) => {
                res.render('me/stored-album', {
                    count,
                    album: mutlipleMongooseToObject(album)
                })
            })
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