const Course = require('../model/Course');
const Account = require('../model/Account');

const { mutlipleMongooseToObject } = require('../../util/mongoose.js');
const mongoose = require('../../util/mongoose.js');

class SiteController {
    
    async search(req, res) {
        res.render('search');
        try {
            const courses = await Course.find({});
            res.json(courses);
        } catch (err) {
            res.status(400).json({ error: 'ERROR!!!' });
        }

        // Course.find({})
        //     .then(courses => res.render('search'))
        //     .catch(err => next(err))
    }
    
    async courses(req, res, next) {
        // try {
        //     const account = await Account.find({});
        //     res.json(account);
        // } catch (err) {
        //     res.status(400).json({ error: 'ERROR!!!' });
        // }
        // res.render('news');

        Course.find({})
            .then(courses =>{ 
                res.render('courses', { 
                    courses: mutlipleMongooseToObject(courses) 
                })
            })
            .catch(next)
    }
    
    async index(req, res) {
        res.render('home');
    }
}

module.exports = new SiteController;
