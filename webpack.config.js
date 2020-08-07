const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const DotenvWebpack = require('dotenv-webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = {
  mode: nodeEnv,
  entry: {
    polyfill: './src/polyfill.ts',
    bundle: './src/index.tsx',
    // purchaseDone: './src/purchaseDone.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/[name].[hash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin({
      configFile: './tsconfig.json'
    })],
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.(png|jpg|gif|mov|woff2?|otf|svg|pdf|ttf|eot)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'assets',
          },
        }, ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader'
        }],
      },
    ],
  },
  devServer: {
    hot: true,
    inline: true,
    liveReload: false,
    disableHostCheck: true,
    port: process.env.PORT || 9000,
    // host: '0.0.0.0',
    historyApiFallback: {
      rewrites: [
        // { from: /^\/purchase-done.html$/, to: '/purchase-done.html' },
        {
          from: /^.*$/g,
          to: '/index.html'
        },
      ],
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: 'favicon.ico',
      excludeChunks: ['purchaseDone'],
    }),
    new HtmlWebpackPlugin({
      template: './purchase-done.html',
      favicon: 'favicon.ico',
      filename: 'purchase-done.html',
      excludeChunks: ['bundle'],
    }),
    new MiniCssExtractPlugin({
      filename: `css/bundle.[hash].css`,
    }),
    new DotenvWebpack(),
  ],
};