import { BaseObject } from "./BaseObject";
import { AppConstants } from "./constant";

export class Ball extends BaseObject {
  private _velocity: number;
  private _direction: number;
  private _speed: number = 0.5;
  private _delayTime: number = 0;
  public mass: number = 1;
  constructor() {
    super("ball");
    this._velocity = Math.sqrt(2 * 9.8 * AppConstants.appHeight);
    this._direction = 270;
    this.image.scale = 0.25;
  }

  get velocity(): number {
    return this._velocity;
  }

  set velocity(v: number) {
    this._velocity = v;
  }

  get direction(): number {
    return this._direction;
  }

  set direction(d: number) {
    this._direction = d;
  }
  private _move(dt: number) {
    const newVelocity = this._calculateNewVelocityAndDirection();
    this._velocity = newVelocity.velocity;
    this._direction = newVelocity.angle;
    const nextX =
      this.position.x -
      (Math.cos((newVelocity.angle * Math.PI) / 180) *
        (newVelocity.velocity * (dt + this._delayTime) * this._speed)) /
        1000;
    const nextY =
      this.position.y -
      (Math.sin((newVelocity.angle * Math.PI) / 180) *
        (newVelocity.velocity * (dt + this._delayTime) * this._speed)) /
        1000;
    this.position = { x: nextX, y: nextY };
    this._delayTime = 0;
  }

  private _calculateNewVelocityAndDirection(): {
    velocity: number;
    angle: number;
  } {
    const gravity = 9.8;
    // calculate each time how far can move
    const v1x = Math.cos((this.direction * Math.PI) / 180) * this.velocity;
    const v1y = Math.sin((this.direction * Math.PI) / 180) * this.velocity;

    // calculate effect of gravity on velocity
    const v1yNew = v1y - gravity;

    // calculate new velocity
    const newVelocity = Math.sqrt(v1x * v1x + v1yNew * v1yNew);

    // calculate new direction
    const newAngle = (Math.atan2(v1yNew, v1x) * 180) / Math.PI;

    return { velocity: newVelocity, angle: newAngle };
  }

  public update(dt: number) {
    this._move(dt);
  }
}
