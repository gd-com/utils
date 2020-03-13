const Long = require('long')

/**
 * Decode Int 64
 * @param buffer {Buffer}
 * @param offset {Number}
 * @returns {{value: Number, length: Number}}
 */
function get64 (buffer, offset = 0) {
  return {
    value: Long.fromBytesLE(buffer.slice(offset)).toString(),
    length: 8
  }
}

module.exports = get64
