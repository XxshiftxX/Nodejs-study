var express = require('express');
var http = require('http');

var app = express();

app.get('/', function(req, res, next) {
  console.log('첫 번째 미들에어에서 요청을 처리함.');

  res.send({name: '소녀시대', age: 20});

  //next();
});

app.get('/hello', function(req, res, next) {
  console.log('두 번째 미들에어에서 요청을 처리함.');

  res.end();
});

http.createServer(app).listen(3000, function(){
  console.log('Express 서버가 3000번 포트에서 시작됨.');
});
