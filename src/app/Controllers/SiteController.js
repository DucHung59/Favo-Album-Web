const Course = require('../model/Course');
const Account = require('../model/Account');


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
    
    async news(req, res, next) {
        // try {
        //     const account = await Account.find({});
        //     res.json(account);
        // } catch (err) {
        //     res.status(400).json({ error: 'ERROR!!!' });
        // }
        // res.render('news');

        Course.find({})
            .then(courses => res.render('news', { courses }))
            .catch(err => next(err))
    }
    
    async index(req, res) {
        res.render('home');
    }
}

module.exports = new SiteController;
