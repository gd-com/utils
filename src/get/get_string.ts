import { IGetReturn } from "../types";

/**
 * Decode String
 * @param buffer {Buffer}
 * @param offset {Number}
 * @returns {{value: String, length: Number}}
 */

export function getString(
  buffer: Buffer,
  offset: number = 0
): IGetReturn<string> {
  const len = buffer.readUInt32LE(offset);

  return {
    value: buffer
      .toString("utf8", offset + 4, offset + 4 + len)
      .replace("\u0000", ""),
    length: 4 + len,
  };
}
