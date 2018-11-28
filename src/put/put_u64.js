const Long = require('long')

function putU64 (value, buffer = null) {
  const newBuffer = Long.fromNumber(value, true).toBytesLE()

  if (buffer != null) {
    return Promise.resolve(Buffer.concat([buffer, newBuffer], buffer.length + newBuffer.length))
  } else {
    return Promise.resolve(newBuffer)
  }
}

module.exports = putU64
