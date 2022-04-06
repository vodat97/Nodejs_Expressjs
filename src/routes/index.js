const newsRouter = require('./news');
const sitesRouter = require('./site');
const coursesRouter = require('./course');

function route(app) {
  app.use('/news', newsRouter);

  app.use('/', sitesRouter);

  app.use('/courses', coursesRouter);
}

module.exports = route;
