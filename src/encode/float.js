const { FLOAT } = require('../constants')
const arch = require('arch')

/**
 * Encode Float
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */
function encode (value) {
  // always encode real as double cf : marshalls.cpp L842
  /* eslint-disable */
  if (arch() === 'x64' && false) { // TODO x64
  /* eslint-enable */
    let buf = Buffer.alloc(12)
    buf.writeUInt16LE(FLOAT, 0)
    buf.writeUInt16LE(1, 2) // flag 1 for double
    buf.writeDoubleLE(value, 4)

    return Promise.resolve({
      value: buf,
      length: buf.length
    })
  } else {
    let buf = Buffer.alloc(8)
    buf.writeUInt16LE(FLOAT, 0)
    buf.writeUInt16LE(0, 2) // flag 0 for float
    buf.writeFloatLE(value, 4)

    return Promise.resolve({
      value: buf,
      length: buf.length
    })
  }
}

module.exports = {
  encode: (prepare, value) => encode(value),
  type: (typeName, value) => typeName === 'number' && !Number.isInteger(value)
}
