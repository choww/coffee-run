var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: ['whatwg-fetch', './assets/js/index'],
  output: {
      path: path.resolve('assets/bundles/'),
      filename: '[name]-[hash].js'
  },
  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }), 
    new ExtractTextPlugin({
      filename: 'public/application.css',
      allChunks: true
    })
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader', 
        query: { presets: ['react', 'es2015'] }
      },
      { test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader', 
          loader: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
          ]
        }) 
      }
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  },
}
