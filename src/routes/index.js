const newsRouter = require('./news');
const meRouter = require('./me');
const sitesRouter = require('./site');
const coursesRouter = require('./course');

function route(app) {
  app.use('/news', newsRouter);

  app.use('/', sitesRouter);

  app.use('/courses', coursesRouter);

  app.use('/me', meRouter);
}

module.exports = route;
