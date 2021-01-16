const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
path.resolve(__dirname, "client");

const config = {
  mode: "development",
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle-[hash].js",
  },

  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|mp3|png)$/,
        use: "file-loader",
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "client"),
      path.resolve(__dirname, "node_modules"),
      "node_modules",
    ],
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["!public/index-*"],
    }),
    new HtmlWebpackPlugin({
      title: "Joshua Owens",
      filename: "index.html",
      template: "./client/index.html",
      cache: false,
      favicon: path.join(__dirname, "client", "static", "8-bit-josh.png"),
    }),
  ],
};

module.exports = config;
