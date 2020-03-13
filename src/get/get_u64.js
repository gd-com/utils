const Long = require('long')

/**
 * Decode Unsigned Int 64
 * @param buffer {Buffer}
 * @param offset {Number}
 * @returns {{value: Number, length: Number}}
 */
function getU64 (buffer, offset = 0) {
  return {
    value: Long.fromBytesLE(buffer.slice(offset), true).toString(),
    length: 8
  }
}

module.exports = getU64
