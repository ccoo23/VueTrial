const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  devtool: 'null',
  devServer: {
    contentBase: "./build", // 本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              modules: true,
            }
          }, {
            loader: "postcss-loader"
          }
        ]
      },
      {
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                module: true,
                localIdentName: '[name]__[local]--[hash:base64:5]', // 指定css的类名格式
                sourceMap: true,
                minimize: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
          fallback: 'style-loader',
        }),
      },
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('style.css'),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: false,
        },
      }),
    ],
  },
};
