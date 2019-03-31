const koaBody = require('koa-body')
const pureKoaRouter = require('pure-koa-router')
const koaNunjucks = require('koa-nunjucks-2')
const koaStatic = require('koa-static')

const path = require('path')
const routes = require('../routes')
const controllerDir = path.join(__dirname, '../controller')

module.exports = (app) => {
  app.use(koaNunjucks({
    ext: 'html',
    path: path.join(__dirname, '../views'),
    nunjucksConfig: {
      trimBlocks: true
    }
  }))
  app.use(koaStatic(path.resolve(__dirname, '../upload')))
  app.use(koaBody({
    multipart: true,
    formidable: {
      maxFileSize: 1000 * 1024 * 1024 // 设置上传文件大小最大限制，默认10M
    }
  }))
  app.use(pureKoaRouter({
    routes,
    controllerDir
  }))
}
