const Album = require('../model/Album');

const {mongooseObject} = require('../../util/mongoose')

class AlbumController {
    async show(req, res, next) {
        Album.findOne({slug: req.params.slug})
            .then((album) => {
                res.render('album/show', {
                    album: mongooseObject(album)
                });
            })
            .catch(next)
    }
    // [GET]
    async create(req, res, next) {
        res.render('album/create');
    }

    async edit(req, res, next) {
        Album.findById(req.params.id)
            .then(album => res.render('album/edit', {
                album: mongooseObject(album)
            }))
            .catch(next)
        
    }

    //[PUT] 
    async update(req, res, next) {
        Album.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/album'))
            .catch(next)
    }

    //[POST]
    async store(req, res, next) {
        // res.json(req.body);
        const formData = req.body;
        formData.img = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`;
        const album = new Album(req.body);
        album.save()
            .then(() => {
                res.redirect('/albums')
            })
            .catch(err => {
                
            })
    }
}

module.exports = new AlbumController();