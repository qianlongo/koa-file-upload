const routes = [
  {
    path: '/',
    methods: 'all',
    controller: 'views.index'
  },
  {
    path: '/show/files',
    methods: 'all',
    controller: 'views.showFiles'
  },
  {
    path: '/middle',
    methods: 'all',
    controller: 'views.middle'
  },
  {
    path: '/upload',
    methods: 'all',
    controller: 'upload.upload'
  }
]

module.exports = routes
