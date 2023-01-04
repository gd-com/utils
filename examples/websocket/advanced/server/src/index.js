const WebSocket = require('ws')
const { getU16, putU16, putString } = require('@gd-com/utils')
const { v4 } = require('uuid')
const process = require('./process')

const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', ws => {
  let uuid = v4()
  console.log(`[${uuid}] Connected`)

  // send is uuid
  let uuidPacketId = putU16(1)
  let uuidPacketData = putString(uuid)
  let uuidPacket = Buffer.concat([uuidPacketId, uuidPacketData])
  ws.send(uuidPacket)

  ws.on('message', (message) => {
    let recieve = Buffer.from(message)

    const type = getU16(recieve)
    console.log(`[${uuid}] << Recieve packet code`, type.value)
    if (process.hasOwnProperty(type.value)) {
      process[`${type.value}`](uuid, ws, recieve.slice(type.length))
    } else {
      console.log(`[${uuid}] << Unknow packet code`, type.value)
    }
  })
})
