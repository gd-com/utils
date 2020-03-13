const Long = require('long')
/**
 * Encode Int 64
 * @param value
 * @returns {Buffer}
 */
function put64 (value) {
  return Buffer.from(Long.fromString(value.toString()).toBytesLE())
}

module.exports = put64
