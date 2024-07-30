import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  devtools: { enabled: true },
  build: {
    transpile: [
      'vuetify',
      'hast-util-select',
    ],
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s - PT. SINERGI ABADI SENTOSA',
      title: 'PT. SINERGI ABADI SENTOSA',
      meta: [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@TwitterHandleAnda' },
        { name: 'instagram:card', content: 'summary_large_image' },
        { name: 'instagram:site', content: '@TwitterHandleAnda' },
        { name: 'facebook:card', content: 'summary_large_image' },
        { name: 'facebook:site', content: '@TwitterHandleAnda' },
        { name: 'youtube:card', content: 'summary_large_image' },
        { name: 'youtube:site', content: '@TwitterHandleAnda' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  css: [
    '@/assets/css/style.css'
  ],
  plugins: ['~/plugins/axios.ts'],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/device',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
