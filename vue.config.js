const isDev = process.env.NODE_ENV === "development";
// vue.config.js 配置说明
// 这里只列一部分，具体配置惨考文档啊
module.exports = {
  publicPath:isDev?'/':'/ctm01ldtsdv-web',
  outputDir: 'dist/static',
  indexPath: `../templates/index.ftl`,
  devServer: {
    port: 8080, // 端口号
    host: '0.0.0.0',
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
  }
};
