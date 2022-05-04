export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "اكواد خصم",
    htmlAttrs: {
      lang: "ar",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@/modules/sitemapRouteGenerator"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
  ],

  sitemap: {
    hostname: "http://localhost:3000",
  },

  i18n: {
    locales: [{ code: "ar", iso: "ar-EG", file: "ar.json", name: "Arabic" }],
    strategy: "no_prefix",
    defaultLocale: "ar",
    fallbackLocale: "ar",
    langDir: "lang/",
    seo: true,
    lazy: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: "https://admin.akwadkhasm.com/api",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
