//import { engine } from 'express-handlebars';
const path = require('path');
const hbs = require('express-handlebars');
const morgan = require('morgan');
const express = require('express');
var methodOverride = require('method-override');

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//connect db

db.connect();

app.use(express.static(path.join(__dirname, 'public')));
//app.use(morgan('combined'));
//app.engine('handlebars', engine());
app.engine(
  '.hbs',
  hbs.engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource/views'));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.use(methodOverride('_method'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
