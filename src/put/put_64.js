const Long = require('long')

function put64 (value) {
  return Buffer.from(Long.fromString(value.toString()).toBytesLE())
}

module.exports = put64
