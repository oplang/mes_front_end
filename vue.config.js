// 分析打包时间
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
    '/mes/' :
    '/',
  productionSourceMap: false,
  devServer: {
    host: "0.0.0.0",
    port: 8002,
    // https: false,
    // proxy: {
    //   '/api': { //代理api
    //     target: 'localhost:8000', //服务器api地址
    //     ws: true, // proxy websocket
    //     changeOrigin: true, //是否跨域
    //     // pathRewrite: { //重写路径
    //     //   '^/api': ''
    //     // }
    //   }
    // }
  },
  // configureWebpack: smp.wrap({
  //   plugins: [new BundleAnalyzerPlugin()]
  // })
  chainWebpack: (config) => {
    /* 添加分析工具*/
    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_config_report) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end();
        config.plugins.delete('prefetch')
      }
    }
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
  }
}