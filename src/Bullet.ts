import { BaseObject } from "./BaseObject";
import { FireOption } from "./Type";

export class Bullet extends BaseObject {
  private _velocity!: number;
  private _vec: { vx: number; vy: number } = { vx: 0, vy: 0 };
  private mass: number = 3;
  private _gravity: { ax: number; ay: number } = { ax: 0, ay: 0 };
  constructor() {
    super("ball");
    this._gravity.ay = 0.5;
  }

  public applyForce(option: FireOption) {
    const angle = option.angle;
    const F = option.F;
    this._vec.vx = (F * Math.cos(angle)) / this.mass;
    this._vec.vy = (F * Math.sin(angle) * -1) / this.mass;
  }

  update(dt: number) {
    this.position.x += this._vec.vx * dt;
    this.position.y += this._vec.vy * dt;

    this._vec.vy += this._gravity.ay;
  }
}
