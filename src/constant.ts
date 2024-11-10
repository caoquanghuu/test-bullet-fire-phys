/* eslint-disable @typescript-eslint/no-namespace */
export namespace AppConstants {
  export const appWidth: number = 2840;
  export const appHeight: number = 1440;
  export const appColor: string = "#1099bb";
  export const fishCount: number = 5;
  export const strokeWidth: number = 48;
  export const matrixRectWidth: number = 32;
  export const matrixRectHeight: number = 32;
  export const speed: number = 100;
  export const mapSize = {
    width: 896,
    height: 576
  };
  export const snakeDefaultLength: number = 4;
  export const colum = mapSize.width / matrixRectWidth;
  export const rows = mapSize.height / matrixRectHeight;
  export const timeMoveOfSnake: number = 50;
}
