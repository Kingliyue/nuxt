module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '谷粒学院',
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
    extend(config, { isDev, isClient }) {
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
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],

  axios: {

    proxy: true, // 表示开启代理
    prefix: '/api', // 表示给请求url加个前缀 /api
    credentials: true // 表示跨域请求时是否需要使用凭证
  },
  proxy: {
    '/banner': {
      target: 'http://localhost:8004', // 目标接口域名
      changeOrigin: true, // 表示是否跨域
      pathRewrite: {
        '^/banner': '', // 把 /api 替换成‘’
      }
    },
    '/edu': {
      target: 'http://localhost:8003', // 目标接口域名
      changeOrigin: true, // 表示是否跨域
      pathRewrite: {
        '^/edu': '', // 把 /api 替换成‘’
      }
    }
  },
  plugins: [
    { src: '~/plugins\\nuxt-swiper-plugin.js', ssr: false }
  ],

}

