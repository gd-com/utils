function getU8 (buffer, offset = 0) {
  return Promise.resolve(buffer.readUInt8(offset))
}

module.exports = getU8
