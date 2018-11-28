const Long = require('long')

function get64 (buffer, offset = 0) {
  return Promise.resolve(Long.fromBytesLE(buffer.slice(offset)).toNumber())
}

module.exports = get64
