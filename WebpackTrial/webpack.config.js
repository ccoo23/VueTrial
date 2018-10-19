module.exports = {
  mode: 'development',
  entry: __dirname + '/app/main.js', // 已多次提及的唯一入口文件
  output: {
    path: __dirname + '/public', // 打包后的文件存放的地方
    filename: 'bundle.js', // 打包后输出文件的文件名
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './public', // 本地服务器所加载的页面所在的目录
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
          },
        ],
      },
    ],
  },
};
