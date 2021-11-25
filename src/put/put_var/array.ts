import { TYPE } from '../../constants'
/**
 * Encode array
 * @param value
 * @returns {Buffer}
 */
function subPutVarArray (value) {
  let len = 8

  for (const i in value) {
    if (Object.prototype.hasOwnProperty.call(value, i)) {
      len += value[i].length
    }
  }

  const buf = Buffer.alloc(len)

  buf.writeUInt16LE(TYPE.ARRAY, 0)
  buf.writeUInt16LE(value.length & 0x7FFFFFFF, 4)

  let bufPos = 8

  for (const i in value) {
    if (Object.prototype.hasOwnProperty.call(value, i)) {
      value[i].copy(buf, bufPos)
      bufPos += value[i].length
    }
  }

  return buf
}

export function putVarArray(prepare, array) {
  const results = array.reduce((rawData, item) => {
    const data = prepare(item)
    rawData.push(data)
    return rawData
  }, [])
  return subPutVarArray(results)
}