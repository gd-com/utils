import { GodotVector3 } from "./GodotVector3";

export class GodotTransform {
  private _x: GodotVector3;
  private _y: GodotVector3;
  private _z: GodotVector3;
  private _origin: GodotVector3;

  constructor(
    x: GodotVector3,
    y: GodotVector3,
    z: GodotVector3,
    origin: GodotVector3
  ) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._origin = origin;
  }

  get x(): GodotVector3 {
    return this._x;
  }

  set x(value: GodotVector3) {
    this._x = value;
  }

  get y(): GodotVector3 {
    return this._y;
  }

  set y(value: GodotVector3) {
    this._y = value;
  }

  get z(): GodotVector3 {
    return this._z;
  }

  set z(value: GodotVector3) {
    this._z = value;
  }

  get origin(): GodotVector3 {
    return this._origin;
  }

  set origin(value: GodotVector3) {
    this._origin = value;
  }
}
