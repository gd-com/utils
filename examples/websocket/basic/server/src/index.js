const WebSocket = require('ws')
const gdCom = require('@gd-com/utils')

const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', ws => {
  console.log('connected')
  ws.on('message', (data) => {
    const packetWithLength = new Buffer.from(data)
    const length = packetWithLength.readUInt16LE(0)

    const packet = packetWithLength.slice(4, length + 4)

    const decoded = gdCom.getVar(packet)
    console.log('receive :', decoded.value)

    // we need to put the packet length on top cause it's tcp
    const packetToSend = gdCom.prefixWithLength(gdCom.putVar(Math.random()))

    console.log('send :', packetToSend)
    ws.send(packetToSend)
  })
})
