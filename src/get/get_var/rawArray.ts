import {IGetReturn} from "../../types";

/**
 * Decode RawArray
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Array, length: Number}}
 */
export function getVarRawArray (genericDecoder, buf: Buffer): IGetReturn<Array<number>> {
  const bufLength = buf.readUInt32LE(0)

  return {
    value: buf.slice(4, bufLength + 4).toJSON().data,
    length: bufLength + 4 + 4 // type +  length
  }
}