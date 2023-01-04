const fs = require('fs')
const tls = require('tls')
const {putVar, getVar, StreamTcp, prefixWithLength} = require('@gd-com/utils')

const server = tls.createServer(
  {
    key: fs.readFileSync('certs/x509.key'),
    cert: fs.readFileSync('certs/x509.crt'),
    rejectUnauthorized: true
  },
  (socket) => {
    console.log('client connected', socket.authorized ? 'authorized' : 'unauthorized');

    const tcpSplit = new StreamTcp()

    socket.pipe(tcpSplit).on('data', (data) => {
      const packet = new Buffer.from(data)

      const decoded = getVar(packet)
      console.log('receive :', decoded.value)

      // we need to put the packet length on top cause it's tcp
      const packetToSend = prefixWithLength(putVar(Math.random()))

      console.log('send :', packetToSend)
      socket.write(packetToSend)
    })

    socket.on('error', () => console.log('Bye :('))
  });

server.listen(9090, '127.0.0.1', () => {
  console.log(`Server launched TLS 127.0.0.1:${9090}`)
})
