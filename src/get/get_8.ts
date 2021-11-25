import {IGetReturn} from "../types/IGetReturn";

/**
 * Decode Int 8
 * @param {Buffer} buffer
 * @param {Number} offset
 * @returns {{value: Number, length: Number}}
 */

export function get8 (buffer: Buffer, offset: number = 0): IGetReturn<number> {
  return {
    value: buffer.readInt8(offset),
    length: 1
  }
}
