const { ARRAY } = require('../../constants')
/**
 * Encode array
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */
function encode (value) {
  let len = 8

  for (let i in value) {
    if (value.hasOwnProperty(i)) {
      len += value[i].length
    }
  }

  let buf = Buffer.alloc(len)

  buf.writeUInt16LE(ARRAY, 0)
  buf.writeUInt16LE(value.length & 0x7FFFFFFF, 4)

  let bufPos = 8

  for (let i in value) {
    if (value.hasOwnProperty(i)) {
      value[i].copy(buf, bufPos)
      bufPos += value[i].length
    }
  }

  return buf
}

module.exports = {
  encode: (prepare, array) => {
    const results = array.reduce((rawData, item) => {
      const data = prepare(item)
      rawData.push(data)
      return rawData
    }, [])
    return encode(results)
  },
  type: (typeName, value) => typeName === 'array'
}
