const fs = require('fs')
const { uploadFilesPath } = require('../config')

module.exports = {
  async index (ctx) {
    await ctx.render('index', {
      name: 'qianlongo'
    })
  },
  async showFiles (ctx) {
    const filesName = fs.readdirSync(uploadFilesPath)
    const filesLink = filesName.map((file) => `/files/${file}`)

    await ctx.render('showFiles', { filesLink })
  },
  async middle (ctx) {
    await ctx.render('middle')
  }
}
