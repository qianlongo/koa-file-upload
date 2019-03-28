const { PORT, ADDRESS, NODE_ENV } = process.env
const path = require('path')
const uploadFilesPath = path.join(__dirname, '../upload/files')

module.exports = {
  'PORT': PORT || '9000',
  'ADDRESS': ADDRESS || '0.0.0.0',
  'NODE_ENV': NODE_ENV || 'development',
  uploadFilesPath
}
