import { IGetReturn } from '../types'

/**
 * Decode Int 16
 * @param buffer {Buffer}
 * @param offset {Number}
 * @returns {{value: Number, length: Number}}
 */
export function get16 (buffer: Buffer, offset: number = 0): IGetReturn<number> {
  return {
    value: buffer.readInt16LE(offset),
    length: 2
  }
}
