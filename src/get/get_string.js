async function getString (buffer, offset = 0) {
  const len = buffer.readUInt32LE(offset)
  const pad = len % 4 === 0 ? 0 : 4 - (len % 4)

  return {
    value: buffer.toString('utf8', offset + 4, offset + 4 + len).replace('\u0000', ''),
    length: 4 + len + pad
  }
}

module.exports = getString
