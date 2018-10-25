/**
 * @description
 * Entry file for The Province Man's Web App
 */
const express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require('./server/routers/indexRouter');
const productRouter = require('./server/routers/productRouter');
const path = require('path');
const app = express();
const port = 3300;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/server/views/index.html'));
});


app.listen(port, (err) => {
  if(err) { return console.error(err); }
  console.log(`Listening to ${port}...`);
});
