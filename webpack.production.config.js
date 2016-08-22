var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var buildPath = path.resolve(__dirname, 'public', 'build');
var indexPath = path.resolve(__dirname, 'public/src/index.js');

module.exports = {
  entry: [
    './public/src/index.js'
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
      },
      {
        test: /\.(otf)$/,
        loader: "file-loader?name=fonts/[name]-[hash].[ext]"
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
    new ExtractTextPlugin("style.css", { allChunks: true })
  ]
};
