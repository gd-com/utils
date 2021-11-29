import Long from "long";
/**
 * Encode Int 64
 * @param value
 * @returns {Buffer}
 */
export function put64(value: Long): Buffer {
  return Buffer.from(Long.fromValue(value).toBytesLE());
}
