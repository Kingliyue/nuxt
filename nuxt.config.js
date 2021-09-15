module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '{{ 李岳 }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  axios: {
    proxy: true, // 需要的，不设置请求无法转发
  },
  proxy: {
    '/api/': {
      target: 'http://127.0.0.1:9000', // 请求得对方地址
      changeOrigin: true,
    },
    '/static/': {
      target: 'http://127.0.0.1:9000',
      changeOrigin: true,
    }
  }
}

