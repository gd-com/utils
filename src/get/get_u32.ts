import {IGetReturn} from "../types/IGetReturn";

/**
 * Decode Unsigned Int 32
 * @param buffer {Buffer}
 * @param offset {Number}
 * @returns {{value: Number, length: Number}}
 */
export function getU32 (buffer: Buffer, offset: number = 0): IGetReturn<number> {
  return {
    value: buffer.readUInt32LE(offset),
    length: 4
  }
}
