const path = require("path");

const config = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "dist/"
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/
      }
    ]
  }
};

module.exports = config;
