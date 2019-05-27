const HtmlWebpackPlugin = require ('html-webpack-plugin');
const path = require ('path');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.join (__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin ({
      template: './dist/index.html',
      favicon: './dist/favicon.ico',
    }),
  ],
};
