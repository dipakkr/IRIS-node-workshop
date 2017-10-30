var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var dishR = require('./dishRouter');
var promoR = require('./promoRouter');
var leaderR = require('./leaderRouter');

var hostname = 'localhost';
var port = '3000';

var app = express();
app.use(morgan('dev'));

app.use('/dishes',dishR);
app.use('/promotions',promoR);
app.use('/leadership',leaderR);

app.listen(port,hostname,function(){
  console.log('App listening on port 3000');
});
