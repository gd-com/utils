import { GodotVector2 } from "./GodotVector2";

export class GodotTransform2D {
  private _x: GodotVector2;
  private _y: GodotVector2;
  private _origin: GodotVector2;

  constructor(x: GodotVector2, y: GodotVector2, origin: GodotVector2) {
    this._x = x;
    this._y = y;
    this._origin = origin;
  }

  get x(): GodotVector2 {
    return this._x;
  }

  set x(value: GodotVector2) {
    this._x = value;
  }

  get y(): GodotVector2 {
    return this._y;
  }

  set y(value: GodotVector2) {
    this._y = value;
  }

  get origin(): GodotVector2 {
    return this._origin;
  }

  set origin(value: GodotVector2) {
    this._origin = value;
  }
}
