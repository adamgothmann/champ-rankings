var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req, res){
  // console.log("in base url");
  res.sendFile(path.resolve('public/views/index.html'));
});

app.listen(3000, function() {
  console.log('on port 3000');
});
