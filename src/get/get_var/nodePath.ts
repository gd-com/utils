import { getVarString } from './string'

/**
 * Decode Node Path
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: String, length: Number}}
 */
export function getVarNodePath (genericDecoder, buf) {
  const strlen = buf.readUInt32LE(0)
  const nameCount = strlen & 0x7FFFFFFF
  const subnameCount = buf.readUInt32LE(4)
  const total = nameCount + subnameCount

  const names = []
  const subnames = []

  let len = 12

  for (let i = 0; i < total; i++) {
    const strValue = getVarString(genericDecoder, buf.slice(len))
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