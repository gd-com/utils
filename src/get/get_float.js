function getFloat (buffer, offset = 0) {
  return Promise.resolve(buffer.readFloatLE(offset))
}

module.exports = getFloat
