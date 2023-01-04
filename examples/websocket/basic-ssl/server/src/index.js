const { createServer } = require('https');
const { readFileSync } = require('fs');
const { WebSocketServer, createWebSocketStream } = require('ws');

const gdCom = require('@gd-com/utils')

const server = createServer({
  cert: readFileSync('certs/x509.crt'),
  key: readFileSync('certs/x509.key')
});

server.on('request', (req, res) => {
  res.writeHead(200);
  res.end('hello HTTPS world\n');
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Client connected')
  const tcpSplit = new gdCom.StreamTcp()
  createWebSocketStream(ws).pipe(tcpSplit).on('data', (data) => {
    let recieveBuff = Buffer.from(data)
    console.log(recieveBuff)
    let recieve = gdCom.getVar(recieveBuff)
    console.log('Recieve : ', recieve.value)

    let buffer = gdCom.prefixWithLength(gdCom.putVar(Math.random()))
    ws.send(buffer)
  });

  ws.on('disconnect', () => {
    console.log('Bye :(')
  })
});

server.listen(9090, '127.0.0.1', () => {
  console.log(`Server HTTPS WS launched 127.0.0.1:${9090}`)
});