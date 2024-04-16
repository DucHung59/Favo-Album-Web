const Course = require('../model/Course');

const { mongooseObject } = require('../../util/mongoose.js');

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
}

module.exports = new CourseController();