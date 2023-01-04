const { putU16, getU16, getString } = require('@gd-com/utils')
const packets = require("../packets")

module.exports = {
  packet: packets.I_WANT_TO_GO_LEFT,
  process: (uuid, socket, recieve) => {
    console.log(`[${uuid}] >> Send packet code`, packets.OK_GO_LEFT)

    // we know we got a string in recieve !
    const recievedString = getString(recieve)

    console.log(`we recieve : ${recievedString.value}`)

    let packet = putU16(packets.OK_GO_LEFT)

    const lengthBuffer = Buffer.alloc(4)
    lengthBuffer.writeUInt32LE(packet.length, 0)

    const toSend = Buffer.concat([lengthBuffer, packet])

    socket.write(toSend)
  }
}
