/**
 * Decode float
 * @param genericDecoder
 * @param buf {Buffer}
 * @param flag
 * @returns {{value: Number, length: Number}}
 */
export function getVarFloat (genericDecoder, buf, flag) {
  let result = null
  // always encode real as double cf : marshalls.cpp L842
  // but sometimes can be float if double is not necessary
  if (flag === 1) {
    result = {
      value: buf.readDoubleLE(0),
      length: 8
    }
  } else {
    result = {
      value: buf.readFloatLE(0),
      length: 4
    }
  }
  return result
}
