
const course = require('../models/course');
const {mutipleMongooseToObject} = require('../../ulti/mongoose');

class SitesController {
  index(req, res, next) {

    // course.find({}, function(err,courses) {
    //   if(!err) res.json(courses)
    //   res.status(500).json({err: 'failure'})
    // })
    course.find({})
      .then(courses => {
        //res.json(courses)
        res.render('home',{courses: mutipleMongooseToObject(courses)});
      })
      .catch(err => next(err))
    //res.render('home');
  }
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SitesController();
