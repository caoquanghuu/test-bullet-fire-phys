/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

function makeRandomId() {
  let text = "";
  const l = 4;
  const char_list =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < l; i++) {
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }
  return text;
}
const bundleID = makeRandomId();

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  devtool: "eval-source-map",
  output: {
    filename: `bundle-${bundleID}.js`,
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./assets/index.html", // Đường dẫn đến file HTML template
      filename: `index.html`, // Tên file HTML sau khi build
    }),
  ],
};
