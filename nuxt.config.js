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
      {
        name: "keywords",
        content:
          "discounts,discounts tires,dd's discounts,discount tire near me,discounts stores,discounts just eat,discounts codes,copon non,zero coupon bond,coupon bond,noon coupon,noon coupon code,coupons for 5 guys,coupon noon,coupon examples,a coupon,6 flags coupons,2022 promo codes,g coupons,2022 coupon insert schedule,coupons 2022,8 discount,2022 coupon schedule,disney 2022 discounts,jcp coupons 2022,2022 coupon book,new customer coupon,8 coupon,2022 coupons,4/20 discounts,2022 enjoy coupon book,h&m coupons 2022,xfinity 2022 deals,0 financing 2022,كوبونات وخصومات,كوبونات,كوبونات خصومات,كوبونات خصومات نمشي,كوبون خصومات 2b,6 principles of confucianism,كوبونات خصومات نون,كوبونات خصومات امازون,كوبونات خصومات سوق كوم,كوبونات الخصومات",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  target: "static",

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/vue-gtag"],

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
    "nuxt-lazy-load",
  ],

  sitemap: {
    hostname: "https://akwadkhasm.com",
    routes: [],
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
