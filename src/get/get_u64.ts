import Long from "long";
import { IGetReturn } from "../types";

/**
 * Decode Unsigned Int 64
 * @param buffer {Buffer}
 * @param offset {Number}
 * @returns {{value: Number, length: Number}}
 */
export function getU64(buffer: Buffer, offset: number = 0): IGetReturn<Long> {
  return {
    value: Long.fromBytesLE(buffer.slice(offset).toJSON().data, true),
    length: 8,
  };
}
