const { putU16 } = require('@gd-com/utils')
const packets = require("../packets")

module.exports = {
  packet: packets.I_WANT_TO_GO_RIGHT,
  process: (uuid, socket, recieve) => {

    console.log(`[${uuid}] >> Send packet code`, packets.OK_GO_RIGHT)

    let packet = putU16(packets.OK_GO_RIGHT)

    const lengthBuffer = Buffer.alloc(4)
    lengthBuffer.writeUInt32LE(packet.length, 0)
    
    const toSend = Buffer.concat([lengthBuffer, packet])

    socket.write(toSend)
  }
}



