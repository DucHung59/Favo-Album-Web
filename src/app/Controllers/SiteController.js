const Album = require('../model/Album');
const Account = require('../model/Account');

const { mutlipleMongooseToObject } = require('../../util/mongoose.js');
const mongoose = require('../../util/mongoose.js');

class SiteController {
    
    // async search(req, res) {
    //     res.render('search');
    //     try {
    //         const courses = await Course.find({});
    //         res.json(courses);
    //     } catch (err) {
    //         res.status(400).json({ error: 'ERROR!!!' });
    //     }

    //     // Course.find({})
    //     //     .then(courses => res.render('search'))
    //     //     .catch(err => next(err))
    // }

    async album(req, res, next) {
        Album.find({})
            .then(albums => res.render('albums', { 
                albums: mutlipleMongooseToObject(albums) 
            }))
            .catch(next)
            
    }
    
    async index(req, res) {
        res.render('home');
    }
}

module.exports = new SiteController;
