
const Course = require('../models/course');
const {mongooseToObject} = require('../../ulti/mongoose');

class CourseController {
 
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then(course => {
        //res.json(course);
        res.render('courses/show',{course: mongooseToObject(course)})
      })
      .catch(next)
    //res.send(req.params.slug);
  }
}

module.exports = new CourseController();
