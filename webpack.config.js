const path = require('path');
const glob = require("glob-all");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

const PATHS = {
  components: path.join(__dirname, "components"),
  index: path.join(__dirname, "index.tsx"),
  indexHtml: path.join(__dirname, "index.tsx"),
  root: path.resolve(__dirname, './'),
};

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  target: "web",
  cache: false,
  mode: isProduction ? "production" : "development",
  entry: {
    web: "./index.tsx",
    sitemap: "./sitemap.ts"
  },
  output: {
    path: PATHS.root,
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    fallback: {
      "fs": false,
      "path": false,
    }
  },
  plugins: [
    new PurgeCSSPlugin({
      paths: [PATHS.index, PATHS.indexHtml, ...glob.sync(`${PATHS.components}/**/*`, { nodir: true })],
      safelist: {
        standard: [/wid-*/],
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'web.bundle.css'
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
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
    ]
  },
  optimization: isProduction ? {
    minimizer: [
      new CssMinimizerPlugin(), // Minimize CSS
      new TerserPlugin(), // Minimize JavaScript
    ],
    minimize: true,
  } : {
    minimizer: [
      new CssMinimizerPlugin(), // Minimize CSS
    ],
    minimize: true,
  },
};