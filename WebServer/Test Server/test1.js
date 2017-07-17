var http = require('http');

// 웹 서버 객체 생성
var server = http.createServer();

// 웹 서버 시작 및 포트 3000에서 대기
var port = 3000;
server.listen(port, function() {
  console.log('웹 서버가 시작되었습니다.');
});
