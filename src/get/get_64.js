const Long = require('long')

async function get64 (buffer, offset = 0) {
  return Long.fromBytesLE(buffer.slice(offset)).toNumber()
}

module.exports = get64
