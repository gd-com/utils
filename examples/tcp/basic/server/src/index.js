const net = require('net')
const { putVar, getVar, prefixWithLength, StreamTcp } = require('@gd-com/utils')

let server = net.createServer((socket) => {
  console.log('A client is connected !')

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
  socket.on('close', () => console.log('Bye :('))
})

server.on('error', (err) => {
  throw err
})

server.listen(9090, '127.0.0.1', () => {
  console.log(`Server launched TCP 127.0.0.1:${9090}`)
})
