const Course = require('../model/Course');

const {mongooseObject} = require('../../util/mongoose')

class CourseController {
    async show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseObject(course)
                });
            })
            .catch(next)
    }
    // [GET]
    async create(req, res, next) {
        res.render('courses/create');
    }
    //[POST]
    async store(req, res, next) {
        // res.json(req.body);
        const formData = req.body;
        formData.img = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`;
        const course = new Course(req.body);
        course.save()
            .then(() => {
                res.redirect('/courses')
            })
            .catch(err => {
                
            })
    }
}

module.exports = new CourseController();