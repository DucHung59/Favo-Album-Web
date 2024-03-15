const Course = require('../model/Course');


class SiteController {
    
    search(req, res) {
        res.render('search');
    }
    
    news(req, res) {
        res.render('news');
    }
    
    async index(req, res) {
        try {
            const courses = await Course.find({});
            res.json(courses);
        } catch (err) {
            res.status(400).json({ error: 'ERROR!!!' });
        }
        // res.render('home');
    }
}

module.exports = new SiteController;
