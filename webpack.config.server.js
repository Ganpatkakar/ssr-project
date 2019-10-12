const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: './src/server/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '../public',
    filename: 'server.bundle.js'
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '/',
            publicPath: path.resolve('/assets')
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
            "plugins": ["transform-class-properties", "transform-object-rest-spread"]
          }
        }
      }
    ]
  }
};
