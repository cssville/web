const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  target: "node",  
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    web: "./index.tsx",
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: "[name].bundle.js" // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    fallback: {
        "fs": false
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'web.bundle.css', // Name of the output bundle file
    }),
  ],
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  }
};