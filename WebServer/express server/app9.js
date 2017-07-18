var express = require('express');
var http = require('http');
var path = require('path');

var bodyParser = require('body-parser');
var static = require('serve-static');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

app.use(static(path.join(__dirname, 'public')));

var router = express.Router();

router.route('/process/login').get(function(req,res) {
  console.log('/process/login 처리함.');

  var paramId = req.body.id || req.query.id;
  var paramPassword = req.body.password || req.query.password;

  res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
  res.write('<h1>Express 서버에서 응답한 결과입니다.');
  res.write('<div><p>Param id : ' + paramId + '</p></div>');
  res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
  res.end();
});

app.all('*', function(req, res) {
  res.status(404).send('<h1>ERROR! - 무슨 에러인지는 알려드릴 수 없습니다!</h1>');
});

app.use('/', router);

http.createServer(app).listen(3000, function(){
  console.log('Express 서버가 3000번 포트에서 시작됨.');
});
