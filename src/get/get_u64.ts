import Long from 'long'
import {IGetReturn} from "../types/IGetReturn";

/**
 * Decode Unsigned Int 64
 * @param buffer {Buffer}
 * @param offset {Number}
 * @returns {{value: Number, length: Number}}
 */
export function getU64 (buffer: Buffer, offset: number = 0): IGetReturn<Long> {
  return {
    value: Long.fromBytesLE(JSON.parse(buffer.slice(offset).toString()), true),
    length: 8
  }
}