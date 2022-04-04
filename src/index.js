
//import { engine } from 'express-handlebars';
const path = require('path');
const hbs  = require('express-handlebars');
const morgan = require('morgan');
const express = require('express');

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname,'public')));
app.use(morgan('combined'));
//app.engine('handlebars', engine());
app.engine('.hbs', hbs.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource/views'));

app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})