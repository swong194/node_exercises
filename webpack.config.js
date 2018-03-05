var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: "./public/javascripts/index.jsx",
  output: {
    path: path.resolve(__dirname, "public", "build"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["env", "react"]
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    new ExtractTextPlugin("style.css")
  ]
};
