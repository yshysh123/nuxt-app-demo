const pkg = require('./package')
const path = require('path')

module.exports = {
  mode: 'spa',
  /**
   * 缓存配置
   */
  cache: true,
  /**
   * 动画效果配置
   */
  transition: {
    name: 'page',
    mode: 'out-in',
    beforeEnter(el) {
      console.log('Before enter...')
    },
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: ['element-ui/lib/theme-chalk/index.css', 'assets/main.less'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/i18n', '@/plugins/element-ui'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true,
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    '/api': {
      target: 'https://banner-storage-ms.juejin.im',
      pathRewrite: { '^/api': '' },
    },
    '/japi': {
      target: 'https://gold-tag-ms.juejin.im',
      pathRewrite: { '^/japi': '' },
    },
    '/rapi': {
      target: 'https://recommender-api-ms.juejin.im',
      pathRewrite: { '^/rapi': '' },
    },
    '/tapi': {
      target: 'https://timeline-merger-ms.juejin.im',
      pathRewrite: { '^/tapi': '' },
    },
    '/xapi': {
      target: 'https://xiaoce-timeline-api-ms.juejin.im',
      pathRewrite: { '^/xapi': '' },
    },
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
      Object.assign(config.resolve.alias, {
        utils: path.resolve(__dirname, 'utils'),
      })
    },
  },
}
