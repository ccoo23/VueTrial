const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: __dirname + '/app/main.js', // 已多次提及的唯一入口文件
  output: {
    path: __dirname + '/build', // 打包后的文件存放的地方
    filename: 'bundle.js', // 打包后输出文件的文件名
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './build', // 本地服务器所加载的页面所在的目录
    port: '8081',
    historyApiFallback: true, // 不跳转
    inline: true, // 实时刷新
  },
  performance: { hints: false },
  module: { // 配置babel
    rules: [
      {
        test: /(\.jsx|\.js)$/, // 可以使用jsx，es6语法
        use: {
          loader: 'babel-loader', // babel6.x必须和babel-loader7.x配合安装
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
            options: {
              modules: true, // 指定启用css modules
              localIdentName: '[name]__[local]--[hash:base64:5]', // 指定css的类名格式
            },
          }, {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html", // new 一个这个插件的实例，并传入相关的参数 (模板)
    }),
  ],
};
