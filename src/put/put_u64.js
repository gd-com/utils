const Long = require('long')

function putU64 (value) {
  return Long.fromNumber(value, true).toBytesLE()
}

module.exports = putU64
