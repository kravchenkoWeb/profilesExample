// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/google-fonts", "nuxt-swiper", "@nuxtjs/tailwindcss"],
  googleFonts: {
    Roboto: [400, 600, 700],
  },
});
