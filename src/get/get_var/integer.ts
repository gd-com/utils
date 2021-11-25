import Long from 'long'

/**
 * Decode integer
 * @param genericDecoder
 * @param buf {Buffer}
 * @param flag
 * @returns {{value: Number, length: Number}}
 */
export function getVarInteger (genericDecoder, buf, flag = 0) {
  let result = null
  if (flag === 1) {
    result = {
      value: Long.fromBytesLE(buf.slice(0)).toNumber(),
      length: 8
    }
  } else {
    result = {
      value: buf.readInt32LE(0),
      length: 4
    }
  }

  return result
}