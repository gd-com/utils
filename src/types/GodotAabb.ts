import { GodotVector3 } from './GodotVector3'

export class GodotAabb {
  private _coordinate: GodotVector3
  private _size: GodotVector3

  constructor (coordinate: GodotVector3, size: GodotVector3) {
    this._coordinate = coordinate
    this._size = size
  }

  get coordinate (): GodotVector3 {
    return this._coordinate
  }

  set coordinate (value: GodotVector3) {
    this._coordinate = value
  }

  get size (): GodotVector3 {
    return this._size
  }

  set size (value: GodotVector3) {
    this._size = value
  }
}
