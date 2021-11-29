import Long from 'long'
/**
 * Encode Int 64
 * @param value
 * @returns {Buffer}
 */
export function put64 (value: number): Buffer {
  return Buffer.from(Long.fromString(value.toString()).toBytesLE())
}
