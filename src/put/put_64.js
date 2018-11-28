const Long = require('long')

function put64 (value, buffer = null) {
  const newBuffer = Long.fromNumber(value).toBytesLE()

  if (buffer != null) {
    return Promise.resolve(Buffer.concat([buffer, newBuffer], buffer.length + newBuffer.length))
  } else {
    return Promise.resolve(newBuffer)
  }
}

module.exports = put64
