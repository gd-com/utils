function putString (value, buffer = null) {
  let len = Buffer.byteLength(value)
  let pad = len % 4 === 0 ? 0 : 4 - len % 4
  let newBuffer = Buffer.allocUnsafe(4 + len + pad)

  newBuffer.writeUInt32LE(len, 0)
  newBuffer.write(value, 4)
  if (pad !== 0) {
    let pos = 4 + len

    for (let i = 0; i < pad; i++) {
      newBuffer.write('\0', i + pos)
    }
  }

  if (buffer != null) {
    return Promise.resolve(Buffer.concat([buffer, newBuffer], buffer.length + newBuffer.length))
  } else {
    return Promise.resolve(newBuffer)
  }
}

module.exports = putString
