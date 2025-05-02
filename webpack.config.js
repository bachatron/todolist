const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.txt$/i,
        type: 'asset/source',
      },
      {
        test: /\.json$/,
        type: 'json',
      },
    ],
  },
  devServer: {
    static: './dist',
    port: 9000,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin(),
  ],
};
