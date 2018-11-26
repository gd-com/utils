const { INTEGER } = require('../constants')
const arch = require('arch')
const { Int64LE } = require('int64-buffer')

/**
 * Encode Integer
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */
function encode (value) {
  /* eslint-disable */
  if (arch() === 'x64' && false) { // TODO x64
  /* eslint-enable */
    let buf = Buffer.alloc(12)

    buf.writeUInt16LE(INTEGER, 0)
    buf.writeUInt16LE(1, 2)
    Int64LE(value).toBuffer().copy(buf, 4)

    return Promise.resolve({
      value: buf,
      length: buf.length
    })
  } else {
    let buf = Buffer.alloc(8)

    buf.writeUInt16LE(INTEGER, 0)
    buf.writeUInt16LE(0, 2)
    buf.writeInt32LE(value, 4)

    return Promise.resolve({
      value: buf,
      length: buf.length
    })
  }
}

module.exports = {
  encode: (prepare, value) => encode(value),
  type: (typeName, value) => typeName === 'number' && Number.isInteger(value)
}
