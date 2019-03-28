const { PORT, ADDRESS, NODE_ENV } = process.env

module.exports = {
  'PORT': PORT || '9000',
  'ADDRESS': ADDRESS || '0.0.0.0',
  'NODE_ENV': NODE_ENV || 'development'
}
