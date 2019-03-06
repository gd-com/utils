function getU8 (buffer, offset = 0) {
  return {
    value: buffer.readUInt8(offset),
    length: 1
  }
}

module.exports = getU8
