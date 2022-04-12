const Course = require('../models/course');
const { mongooseToObject } = require('../../ulti/mongoose');

class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        //res.json(course);
        res.render('courses/show', { course: mongooseToObject(course) });
      })
      .catch(next);
    //res.send(req.params.slug);
  }
  //[GET] /courses/create
  create(req, res, next) {
    res.render('courses/create');
  }
  //[POST] /courses/store
  store(req, res, next) {
    // res.json(req.body);
    const formData = req.body;
    formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCLxJbYhCQmzlNAkL1llJ_N6qL_zA`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect('/'))
      .catch((error) => {});
  }
  //[GET] /courses/:id/edit
  edit(req, res, next) {
    // res.json(req.body);
    Course.findById(req.params.id)
      .then((course) =>
        res.render('courses/edit', {
          course: mongooseToObject(course),
        }),
      )
      .catch(next);
  }
  //[PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
    //res.json(req.body)
  }
  //[DELETE] /courses/:id
  delete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
  // req.body
  // req.query
  // req.params
}

module.exports = new CourseController();
