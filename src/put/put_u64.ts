import Long from 'long'
/**
 * Encode Unsigned Int 64
 * @param value
 * @returns {Buffer}
 */
export function putU64 (value) {
  return Buffer.from(Long.fromNumber(value, true).toBytesLE())
}
