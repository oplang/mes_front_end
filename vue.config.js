module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mes/'
    : '/',
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
}