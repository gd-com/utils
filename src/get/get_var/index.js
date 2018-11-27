const fs = require('fs')
const path = require('path')
const get16 = require('../get_16')

const files = fs.readdirSync(__dirname)

const decoderList = files.reduce((decoders, filename) => {
  const filePath = path.join(__dirname, filename)
  const extname = path.extname(filePath)

  if (fs.statSync(filePath).isFile() &&
      /^\.js$/i.test(extname) &&
      __filename !== filePath) {
    let decoder = require(filePath)

    decoders[decoder.type] = decoder.decode
  }

  return decoders
}, {})

/**
 * Decode data
 * @param buffer
 * @returns {*}
 */
function decode (buffer) {
  const type = get16(buffer, 0)
  const flag = get16(buffer, 2)
  const data = buffer.slice(4)

  if (decoderList[type] == null) {
    throw new Error(`Decode buffer error: Invalid type ${type}`)
  }

  return decoderList[type](decode, data, flag)
}

module.exports = (buf) => decode(buf).then((data) => data.value)
