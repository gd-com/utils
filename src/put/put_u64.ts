import Long from 'long'
/**
 * Encode Unsigned Int 64
 * @param value
 * @returns {Buffer}
 */
export function putU64 (value: Long): Buffer {
  return Buffer.from(Long.fromValue(value, true).toBytesLE())
}
