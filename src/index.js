//import { engine } from 'express-handlebars';
const path = require('path');
const hbs = require('express-handlebars');
const morgan = require('morgan');
const express = require('express');

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//connect db

db.connect();

app.use(express.static(path.join(__dirname, 'public')));
//app.use(morgan('combined'));
//app.engine('handlebars', engine());
app.engine('.hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource/views'));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
