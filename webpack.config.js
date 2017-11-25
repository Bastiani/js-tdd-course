const webpack = require('webpack');

const nodeENV = process.env.NODE_ENV || 'development';

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './src/main.js',
  },
  output: {
    filename: './build.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules(?!\/webpack-dev-server)/,
        loader: 'babel-loader',
        query: {
          presets: [['es2015', { modules: false }]],
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeENV) },
    }),
  ],
};
