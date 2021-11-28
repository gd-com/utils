/**
 * Decode String
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: String, length: Number}}
 */
import {IGetReturn} from "../../types/IGetReturn";
import {GodotString} from "../../types/GodotString";

export function getVarString (genericDecoder, buf): IGetReturn<GodotString> {
  const len = buf.readUInt32LE(0)
  const pad = len % 4 === 0 ? 0 : 4 - (len % 4)

  return {
    value: buf.toString('utf8', 4, 4 + len).replace('\u0000', ''),
    length: 4 + len + pad
  }
}