const Long = require('long')

function getU64 (buffer, offset = 0) {
  return {
    value: Long.fromBytesLE(buffer.slice(offset), true).toString(),
    length: 8
  }
}

module.exports = getU64
