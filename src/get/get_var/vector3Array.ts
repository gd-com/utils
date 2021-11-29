import { getVarVector3 } from './vector3'
import {IGetReturn, GodotVector3, GodotArray} from "../../types";

/**
 * Decode Vector3Array
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Array, length: Number}}
 */
export function getVarVector3Array (genericDecoder, buf): IGetReturn<GodotArray<GodotVector3>> {
  const nbEntries = buf.readUInt32LE(0)

  // start at 4 cause of nbEntries
  const data: {
    array: Array<GodotVector3>,
    buffer: Buffer,
    pos: number,
  }  = {
    array: [],
    buffer: buf.slice(4),
    pos: 4
  }

  for (let index = 0; index < nbEntries; index++) {
    const decodedValue = getVarVector3(genericDecoder, data.buffer)
    data.array.push(decodedValue.value)
    data.buffer = data.buffer.slice(decodedValue.length)
    data.pos += decodedValue.length
  }

  return {
    value: data.array,
    length: data.pos
  }
}