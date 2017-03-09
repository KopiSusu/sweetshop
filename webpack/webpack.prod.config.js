var webpack = require('webpack');
const path = require('path');

const assetsPath = path.resolve(__dirname, '../public');

module.exports = {
  devTool: "source-map",
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader/webpack!babel'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css!autoprefixer?browsers=last 2 versions'
      }
    ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.json']
    },
    output: {
      path: assetsPath,
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: assetsPath,
      historyApiFallback: true,
      hot: true
    },
    plugins: [
      new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"production"'}}),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({minimize: true, compress: {warnings: false}})
    ]
};