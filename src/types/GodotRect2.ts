import {GodotVector2} from "./GodotVector2";

export class GodotRect2 {
  private _coordinate: GodotVector2;
  private _size: GodotVector2;


  constructor(coordinate: GodotVector2, size: GodotVector2) {
    this._coordinate = coordinate;
    this._size = size;
  }

  get coordinate(): GodotVector2 {
    return this._coordinate;
  }

  set coordinate(value: GodotVector2) {
    this._coordinate = value;
  }

  get size(): GodotVector2 {
    return this._size;
  }

  set size(value: GodotVector2) {
    this._size = value;
  }
}