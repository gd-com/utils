export class GodotQuat {
  private _x: number
  private _y: number
  private _z: number
  private _w: number

  constructor (x: number, y: number, z: number, w: number) {
    this._x = x
    this._y = y
    this._z = z
    this._w = w
  }

  get x (): number {
    return this._x
  }

  set x (value: number) {
    this._x = value
  }

  get y (): number {
    return this._y
  }

  set y (value: number) {
    this._y = value
  }

  get z (): number {
    return this._z
  }

  set z (value: number) {
    this._z = value
  }

  get w (): number {
    return this._w
  }

  set w (value: number) {
    this._w = value
  }
}
