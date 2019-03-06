function getU16 (buffer, offset = 0) {
  return {
    value: buffer.readUInt16LE(offset),
    length: 2
  }
}

module.exports = getU16
