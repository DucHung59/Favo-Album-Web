const Course = require('../model/Course');
const Account = require('../model/Account');


class SiteController {
    
    async search(req, res) {
        // res.render('search');
        try {
            const courses = await Course.find({});
            res.json(courses);
        } catch (err) {
            res.status(400).json({ error: 'ERROR!!!' });
        }
    }
    
    async news(req, res) {
        try {
            const account = await Account.find({});
            res.json(account);
        } catch (err) {
            res.status(400).json({ error: 'ERROR!!!' });
        }
        // res.render('news');
    }
    
    async index(req, res) {
        res.render('home');
    }
}

module.exports = new SiteController;
