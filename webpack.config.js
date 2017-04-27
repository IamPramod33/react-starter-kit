const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: {
    main: "./src/index.jsx"
  },

  output: {
    filename: "react-startup.js",
    path: "./dist",
    publicPath: 'http://localhost:8090/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    root: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'index.html'
  })],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot","babel-loader"],
      },
      {
        //tell webpack to use jsx-loader for all *.jsx files
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|ico)$/,
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }, 
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ],
  },
  devServer: {
    watchOptions: {
      // Needed for Windows Subsystem for Linux dev environment:
      poll: true
    }
  },
  devtool: "cheap-eval-source-map"
}