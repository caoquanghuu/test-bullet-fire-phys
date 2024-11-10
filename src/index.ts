import { Application, Assets } from "pixi.js";
import { AppConstants } from "./constant";
import { GameScene } from "./GameScene";

// Asynchronous IIFE
(async () => {
  // Khởi tạo PixiJS application.
  const app = new Application();

  // Cài đặt app với một số thuộc tính.
  await app
    .init({
      background: AppConstants.appColor,
      width: AppConstants.appWidth,
      height: AppConstants.appHeight,
    })
    .then(() => {
      // Thả canvas của app vào body của HTML.
      document.body.appendChild(app.canvas);
    });
  Assets.add({
    alias: "ball",
    src: "./image/ball.png",
  });
  await Assets.load("ball");
  Assets.add({ alias: "peg", src: "./image/peg.png" });
  await Assets.load("peg");
  const gameScene = new GameScene();

  app.stage.addChild(gameScene);
  // Thêm loop callback function update vào ticker của app.
  app.ticker.add((sticker) => {
    gameScene.update(sticker.deltaMS);
  });
})();
