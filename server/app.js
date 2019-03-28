const Koa = require('koa')
const app = new Koa()
const { PORT } = require('./config')
const registerMiddleware = require('./middleware')

registerMiddleware(app)

app.listen(PORT, () => {
  console.log(`app start at localhost://${PORT}`)
})
