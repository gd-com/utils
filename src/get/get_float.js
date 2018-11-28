async function getFloat (buffer, offset = 0) {
  return buffer.readFloatLE(offset)
}

module.exports = getFloat
