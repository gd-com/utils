function getString (buffer, offset = 0) {
  const len = buffer.readUInt32LE(offset)

  return {
    value: buffer.toString('utf8', offset + 4, offset + 4 + len).replace('\u0000', ''),
    length: 4 + len
  }
}

module.exports = getString
