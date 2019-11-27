const { NODE_PATH } = require('../../constants')
const string = require('./string')

/**
 * Decode Node Path
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, buf) {
  const strlen = buf.readUInt32LE(0)
  const nameCount = strlen & 0x7FFFFFFF
  const subnameCount = buf.readUInt32LE(4)
  const total = nameCount + subnameCount

  const names = []
  const subnames = []

  let len = 12

  for (let i = 0; i < total; i++) {
    const strValue = string.decode(genericDecoder, buf.slice(len))
    len = len + strValue.length
    if (i < nameCount) {
      names.push(strValue.value)
    } else {
      subnames.push(strValue.value)
    }
  }

  return {
    value: names.join('/') + subnames.join('/'),
    length: len
  }
}

module.exports = {
  decode,
  type: NODE_PATH
}
