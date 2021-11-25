import {IGetReturn} from "../types/IGetReturn";

/**
 * Decode Unsigned Int 16
 * @param buffer {Buffer}
 * @param offset {Number}
 * @returns {{value: Number, length: Number}}
 */
export function getU16 (buffer: Buffer, offset: number = 0): IGetReturn<number> {
  return {
    value: buffer.readUInt16LE(offset),
    length: 2
  }
}
