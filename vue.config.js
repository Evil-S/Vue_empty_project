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
    proxy: {
      '/proxyApi': {
        target: 'http://10.2.34.108:17200',
        pathRewrite: {
          '^/proxyApi' : '/ctm01boatstorage'
        }
      },
    }
  }
};
