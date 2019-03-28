const koaBody = require('koa-body')
const pureKoaRouter = require('pure-koa-router')

const path = require('path')
const routes = require('../routes')
const controllerDir = path.join(__dirname, '../controller')

module.exports = (app) => {
  app.use(koaBody({
    multipart: true,
    formidable: {
      maxFileSize: 200 * 1024 * 1024 // 设置上传文件大小最大限制，默认2M
    }
  }))
  app.use(pureKoaRouter({
    routes,
    controllerDir
  }))
}
