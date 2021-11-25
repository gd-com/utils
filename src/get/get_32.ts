import {IGetReturn} from "../types/IGetReturn";

/**
 * Decode Int 32
 * @param buffer {Buffer}
 * @param offset {Number}
 * @returns {{value: Number, length: Number}}
 */
export function get32 (buffer: Buffer, offset: number = 0): IGetReturn<number> {
  return {
    value: buffer.readInt32LE(offset),
    length: 4
  }
}
