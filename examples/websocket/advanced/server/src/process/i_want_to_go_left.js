const { putU16 } = require('@gd-com/utils')
const packets = require("../packets")

module.exports = {
  packet: packets.I_WANT_TO_GO_LEFT,
  process: (uuid, ws, recieve) => {

    console.log(`[${uuid}] >> Send packet code`, packets.OK_GO_LEFT)

    let packet = putU16(packets.OK_GO_LEFT)

    ws.send(packet)
  }
}