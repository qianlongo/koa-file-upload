const fs = require('fs')

const { uploadFilesPath } = require('../config')

module.exports = {
  async upload (ctx, next) {
    const file = ctx.request.files.file
    const reader = fs.createReadStream(file.path)
    const fileName = file.name
    const filePath = `${uploadFilesPath}/${fileName}`
    const upStream = fs.createWriteStream(filePath)

    reader.pipe(upStream)

    ctx.redirect('/middle')
  }
}
