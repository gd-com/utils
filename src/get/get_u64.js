const Long = require('long')

function getU64 (buffer, offset = 0) {
  return Promise.resolve(Long.fromBytesLE(buffer.slice(offset), true).toNumber())
}

module.exports = getU64
