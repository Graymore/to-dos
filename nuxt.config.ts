// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    port: 3080,
  },
  modules: [
    '@nuxt/eslint', 
    '@pinia/nuxt', 
    'nuxt-svg-sprite-icon',
    'pinia-plugin-persistedstate/nuxt'
  ],
  css: ['~/assets/app.scss'],
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'vue-i18n',
      ]
    }
  },
  svgSprite: {
    input: './app/assets/icons/svg',
    output: './app/assets/icons/gen',
    defaultSprite: 'icons'
  },
})