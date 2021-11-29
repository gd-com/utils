import { IGetReturn } from "../types";

/**
 * Decode Float
 * @param buffer {Buffer}
 * @param offset {Number}
 * @returns {{value: Number, length: Number}}
 */
export function getFloat(
  buffer: Buffer,
  offset: number = 0
): IGetReturn<number> {
  return {
    value: buffer.readFloatLE(offset),
    length: 4,
  };
}
