const course = require('../models/course');
const { mutipleMongooseToObject } = require('../../ulti/mongoose');

class MeController {
  //[GET] /me/stored/courses
  storedCourse(req, res, next) {
    course
      .find({})
      .then((courses) =>
        res.render('me/stored-course', {
          courses: mutipleMongooseToObject(courses),
        }),
      )
      .catch(next);
  }
}

module.exports = new MeController();
