import { Graphics, PointData } from "pixi.js";

export type AddToMapFn = (displayAbleObject: Graphics) => void;
export type RemoveFromMapFn = (displayAbleObject: Graphics) => void;

export type Circle = {
  center: PointData;
  radius: number;
  velocity: number;
  angle: number;
};

export type FireOption = {
  angle: number;
  F: number;
};
