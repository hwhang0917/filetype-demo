// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2024-07-05",
  devtools: { enabled: false },
  ssr: false,
  nitro: { preset: "github-pages" },
  app: { baseURL: "/filetype-demo/" },
})
