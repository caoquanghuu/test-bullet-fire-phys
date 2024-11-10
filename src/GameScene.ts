import { Container } from "pixi.js";

import { Map } from "./Map";

export class GameScene extends Container {
  private _map: Map;
  constructor() {
    super();
    this._map = new Map();
    this.addChild(this._map);
  }

  private _init() {}

  public update(dt: number) {
    this._map.update(dt);
  }
}
