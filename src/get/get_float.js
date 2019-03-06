function getFloat (buffer, offset = 0) {
  return {
    value: buffer.readFloatLE(offset),
    length: 4
  }
}

module.exports = getFloat
