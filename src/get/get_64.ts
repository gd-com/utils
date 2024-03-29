import Long from 'long'
import { IGetReturn } from '../types'

/**
 * Decode Int 64
 * @param buffer {Buffer}
 * @param offset {Number}
 * @returns {{value: Number, length: Number}}
 */
export function get64 (buffer: Buffer, offset: number = 0): IGetReturn<Long> {
  return {
    value: Long.fromBytesLE(buffer.slice(offset).toJSON().data),
    length: 8
  }
}
