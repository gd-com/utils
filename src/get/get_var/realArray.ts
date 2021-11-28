import { getVarFloat } from './float'
import {IGetReturn} from "../../types/IGetReturn";
import {GodotArray} from "../../types/GodotArray";
import {GodotFloat} from "../../types/GodotFloat";

/**
 * Decode PoolRealArray
 * @param genericDecoder
 * @param buf {Buffer}
 * @param flag
 * @returns {{value: Array, length: Number}}
 */
export function getVarRealArray (genericDecoder, buf, flag): IGetReturn<GodotArray<GodotFloat>> {
  const nbEntries = buf.readUInt32LE(0)

  // start at 4 cause of nbEntries
  const data = {
    array: [],
    buffer: buf.slice(4),
    pos: 4
  }

  for (let index = 0; index < nbEntries; index++) {
    const decodedValue = getVarFloat(genericDecoder, data.buffer, flag)
    data.array.push(decodedValue.value)
    data.buffer = data.buffer.slice(decodedValue.length)
    data.pos += decodedValue.length
  }

  return {
    value: data.array,
    length: data.pos
  }
}