const net = require('net')
const { getU16, putU16, putString } = require('@gd-com/utils')
const { v4 } = require('uuid')
const process = require('./process')
const StreamTcp = require('./StreamTcp')

const tcpSplit = new StreamTcp()

let server = net.createServer((socket) => {
  let uuid = v4()

  console.log(`[${uuid}] Connected`);

  // send is uuid
  const uuidPacketID = putU16(1)
  const uuidPacketData = putString(uuid)

  const lengthBuffer = Buffer.alloc(4)
  lengthBuffer.writeUInt32LE(uuidPacketID.length + uuidPacketData.length, 0)
  const toSend = Buffer.concat([lengthBuffer, uuidPacketID, uuidPacketData])

  socket.write(toSend)

  socket.pipe(tcpSplit).on('data', (data) => {
    let recieve = new Buffer.from(data)

    const type = getU16(recieve)

    console.log(`[${uuid}] << Recieve packet code`, type.value)
    if (process.hasOwnProperty(type.value)) {
      process[`${type.value}`](uuid, socket, recieve.slice(type.length))
    } else {
      console.log(`[${uuid}] << Unknow packet code`, type.value)
    }

  })

  socket.on('end', () => {
    console.log('Bye :(')
  })
  socket.on('error', () => {
    console.log('Bye :(')
  })
})

server.on('error', (err) => {
  throw err
})

server.listen(9090, '127.0.0.1', () => {
  console.log(`Server launched TCP 127.0.0.1:${9090}`)
})
