import { Container, Text } from "pixi.js";
import { AppConstants } from "./constant";
import { BaseObject } from "./BaseObject";
import { Ball } from "./Ball";

export class Map extends Container {
  private _pegs: BaseObject[] = [];
  private _balls: Ball[] = [];

  constructor() {
    super();

    for (let i = 0; i < AppConstants.appWidth / 100; i++) {
      const peg = new BaseObject("peg");
      peg.position = { x: i * 100, y: AppConstants.appHeight - 100 };
      const text = new Text();
      text.text = `${i * 100}`;
      text.position = { x: i * 100, y: AppConstants.appHeight - 50 };
      this.addChild(peg.image, text);
    }

    const text = new Text();
    text.text = "Fire";
    text.eventMode = "static";
    text.cursor = "pointer";
    text.style.fontSize = 60;
    text.position = {
      x: 1400,
      y: 80
    };
    text.on("pointerdown", () => {
      const ball = new Ball();
      ball.position = {
        x: 100,
        y: 1000
      };
      this._balls.push(ball);
      this.addChild(ball.image);
      const option = this._getInputData();
      const angle = option.angle;
      const F: number = option.F;
      const mass: number = option.mass;
      ball.direction = angle;
      ball.mass = mass;
      ball.velocity = F / mass;
      this._getInputData();
    });

    this.addChild(text);
  }

  private _getInputData(): { mass: number; F: number; angle: number } {
    const massInput = document.getElementById("mass") as HTMLInputElement;
    const fInput = document.getElementById("F") as HTMLInputElement;
    const angleInput = document.getElementById("angle") as HTMLInputElement;
    const mass: number = Number(massInput.value);
    const F: number = Number(fInput.value);
    const angle: number = Number(angleInput.value);

    return { mass: mass, F: F, angle: angle };
  }

  public update(dt: number) {
    if (this._balls.length === 0) return;
    this._balls.forEach((ball, idx) => {
      ball.update(dt);
      if (ball.position.y > AppConstants.appHeight) {
        this._balls.splice(idx, 1);
        this.removeChild(ball.image);
      }
    });
  }
}
