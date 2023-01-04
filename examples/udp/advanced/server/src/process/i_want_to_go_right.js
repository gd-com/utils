const { putU16 } = require('@gd-com/utils')
const packets = require("../packets")

module.exports = {
  packet: packets.I_WANT_TO_GO_RIGHT,
  process: (client, server, remote, data) => {

    console.log(`[${client.uuid}] >> Send packet code`, packets.OK_GO_RIGHT)

    let packet = putU16(packets.OK_GO_RIGHT)

    server.send(packet, remote.port, remote.address)
  }
}


