import { PointData, Sprite } from "pixi.js";

export class BaseObject {
  private _image: Sprite;
  constructor(texture: string) {
    this._image = Sprite.from(texture);
    this._image.anchor.set(0.5);
    this._image.scale = 0.5;
  }

  get position(): PointData {
    const position: PointData = { x: this._image.x, y: this._image.y };
    return position;
  }

  set position(position: PointData) {
    this._image.position.x = position.x;
    this._image.position.y = position.y;
  }

  get image(): Sprite {
    return this._image;
  }
}
