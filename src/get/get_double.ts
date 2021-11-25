import {IGetReturn} from "../types/IGetReturn";

/**
 * Decode Double
 * @param buffer {Buffer}
 * @param offset {Number}
 * @returns {{value: Number, length: Number}}
 */
export function getDouble (buffer: Buffer, offset: number = 0): IGetReturn<number> {
  return {
    value: buffer.readDoubleLE(offset),
    length: 8
  }
}
