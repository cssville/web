const path = require('path');
const nodeExternals = require('webpack-node-externals');

// Node bundle that renders the sitemap routes into dist/ (see prerender.tsx)
module.exports = {
  target: "node",
  mode: "production",
  entry: {
    prerender: "./prerender.tsx"
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: "[name].bundle.js"
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  optimization: {
    minimize: false
  }
};
