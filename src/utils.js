const upperFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1)

const addLengthFront = (buffer) => {
  if (buffer.length > 0) {
    let lengthBuffer = Buffer.alloc(4)
    lengthBuffer.writeUInt32LE(buffer.length, 0)
    return Buffer.concat([lengthBuffer, buffer])
  }
  return Buffer.alloc(0)
}

module.exports = {
  upperFirst,
  addLengthFront
}
