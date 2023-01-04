const dgram = require('dgram')
const { putVar, getVar } = require('@gd-com/utils')

const server = dgram.createSocket('udp4')

server.on('listening', () => {
  let address = server.address()
  console.log(`UDP Server listening on ${address.address}:${address.port}`)
})

server.on('message', (buf, remote) => {
  let buffer = new Buffer.from(buf)

  const recieve = getVar(buffer)
  console.log('Recieve ' , recieve.value)

  let send = putVar(Math.random())

  server.send(send, remote.port, remote.host)
})

server.bind(9091, '127.0.0.1')
