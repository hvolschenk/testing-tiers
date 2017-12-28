const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const join = path.join.bind(null, __dirname);

module.exports = {
  context: join('src'),
  devServer: {
    clientLogLevel: 'error',
    compress: true,
    contentBase: join('dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    noInfo: true,
    port: 9999,
    proxy: {
      '/api': {
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
        target: 'http://bff:8888',
      },
    },
    publicPath: '/',
  },
  devtool: 'cheap-module-source-map',
  entry: ['react-hot-loader/patch', './index.jsx'],
  module: {
    rules: [{
      exclude: [/node_modules/, /\.test\.jsx?$/],
      test: /\.jsx?$/,
      use: [{ loader: 'babel-loader' }],
    }, {
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'sass-loader', options: { includePaths: ['node_modules', 'src'] } },
      ],
    }],
  },
  output: {
    path: join('dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({ hash: true, template: 'index.html' }),
    new webpack.DllReferencePlugin({
      context: join('src'),
      // eslint-disable-next-line
      manifest: require(join('dist', 'vendor-manifest.json')),
    }),
    new AddAssetHtmlPlugin({
      filepath: join('dist', 'vendor.js'),
      hash: true,
      includeSourcemap: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', 'src'],
  },
};
