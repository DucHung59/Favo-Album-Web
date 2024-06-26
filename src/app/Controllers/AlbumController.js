const Album = require('../model/Album');

const { mongooseObject } = require('../../util/mongoose')
const { mutlipleMongooseToObject } = require('../../util/mongoose')

class AlbumController {
    async show(req, res, next) {
        Promise.all([Album.find({}), Album.findOne({ slug: req.params.slug })])
            .then(([albums, album]) => {
                res.render('album/show', {
                    album: mongooseObject(album),
                    albums: mutlipleMongooseToObject(albums),
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
        Album.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/album'))
            .catch(next)
    }

    //[PATCH]
    async restore(req, res, next) {
        Album.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[DELETE]
    async delete(req, res, next) {
        await Album.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[POST]
    async store(req, res, next) {
        // res.json(req.body);
        const formData = req.body;
        formData.img = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`;
        const album = new Album(req.body);
        await album.save()
            .then(() => {
                res.redirect('/albums')
            })
            .catch(next)
    }

    // [POST]
    async formActions(req, res, next) {
        switch (req.body.action) {
            case 'delete': {
                await Album.delete({ _id: { $in: req.body.albumIds} })
                    .then(() => res.redirect('back'))
                    .catch(next)
            }
            default: {
            }
        }
    }
}

module.exports = new AlbumController();