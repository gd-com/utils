const { getString, putString, putU16 } = require('@gd-com/utils')
const packets = require("../packets")

module.exports = {
  packet: packets.I_WANT_TO_GO_RIGHT,
  process: (uuid, ws, recieve) => {
    let data = Buffer.from(recieve)
    let extra = getString(data)

    console.log(`With I_WANT_TO_GO_RIGHT packet i recieve : "${extra.value}"`)

    console.log(`[${uuid}] >> Send packet code`, packets.OK_GO_RIGHT)

    let packetId = putU16(packets.OK_GO_RIGHT)
    let packetData = putString('thanks !')

    let packet = Buffer.concat([packetId, packetData])

    ws.send(packet)
  }
}



