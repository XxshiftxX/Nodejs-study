var http = require('http');
var fs = require('fs');

// 웹 서버 객체 생성
var server = http.createServer();

// 웹 서버 시작 및 포트 3000에서 대기
var port = 3000;
server.listen(port, function() {
  console.log('웹 서버가 시작되었습니다.');
});

// 클라이언트 연결 이벤트
server.on('connection', function(socket){
  var addr = socket.address();
  console.log('클라이언트가 접속했습니다. : %s / %d', addr.address, addr.port);
});

// 클라이언트 요청 이벤트
server.on('request', function(req, res){
  console.log('클라이언트 요청이 들어왔습니다.');

  /*
  var filename = 'icon.png';
  fs.readFile(filename, function(err, data) {
    res.writeHead(200, {"Content-Type": "image/png"});
    res.write(data);
  });
  */
  var audiofilename = 'audio.mp3';
  fs.readFile(audiofilename, function(err, data) {
    res.writeHead(200, {"Content-Type": "audio/mp3"});
    res.write(data);
    res.end();
  });
});

// 서버 종료 이벤트 처리
server.on('close', function(){
  console.log('서버가 종료됩니다.');
});
