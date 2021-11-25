import {IGetReturn} from "../types/IGetReturn";

/**
 * Decode Unsigned Int 8
 * @param buffer {Buffer}
 * @param offset {Number}
 * @returns {{value: Number, length: Number}}
 */
export function getU8 (buffer: Buffer, offset: number = 0): IGetReturn<number> {
  return {
    value: buffer.readUInt8(offset),
    length: 1
  }
}
