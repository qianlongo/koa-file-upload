const fs = require('fs')

const { uploadFilesPath } = require('../config')

module.exports = {
  async upload (ctx, next) {
    const file = ctx.request.files.file
    const upload = (file) => {
      const reader = fs.createReadStream(file.path)
      const fileName = file.name
      const filePath = `${uploadFilesPath}/${fileName}`
      const upStream = fs.createWriteStream(filePath)

      reader.pipe(upStream)
    }

    Array.isArray(file) ? file.forEach((it) => upload(it)) : upload(file)

    ctx.redirect('/middle')
  }
}
