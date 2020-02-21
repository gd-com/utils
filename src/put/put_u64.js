const Long = require('long')
/**
 * Encode Unsigned Int 64
 * @param value
 * @returns {Buffer}
 */
function putU64 (value) {
  return Buffer.from(Long.fromNumber(value, true).toBytesLE())
}

module.exports = putU64
