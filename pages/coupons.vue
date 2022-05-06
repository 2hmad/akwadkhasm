<template>
  <div :id="`app-${this.$i18n.locale}`">
    <div class="index-page">
      <Navbar />
      <div class="container">
        <div class="sides">
          <div class="side">
            <div class="carousel">
              <Carousel />
            </div>
            <div class="content">
              <h1>جميع كوبونات وخصومات {{ new Date().getFullYear() }}</h1>
              <div class="cards">
                <div class="card" v-for="coupon in coupons" :key="coupon.id">
                  <div class="header">
                    <NuxtLink :to="`/stores/${coupon.store.id}`">
                      <div class="brand">
                        <img
                          :src="`http://admin.akwadkhasm.com/storage/stores/${coupon.store.pic}`"
                          alt=""
                        />
                      </div>
                    </NuxtLink>
                    <button
                      class="share"
                      @click="
                        shareViaWebShare(
                          coupon.title,
                          `https://akwadkhasm.com/redirect/${coupon.id}`
                        )
                      "
                    >
                      <img src="/icons/icons8-share.svg" />
                    </button>
                  </div>
                  <div class="content">
                    <NuxtLink :to="`/redirect/${coupon.id}`">
                      <h3>{{ coupon.title }}</h3>
                    </NuxtLink>
                  </div>
                  <div class="footer">
                    <NuxtLink
                      :to="`/redirect/${coupon.id}`"
                      v-if="coupon.type == 'coupon'"
                    >
                      <div class="coupon">
                        <span> {{ coupon.coupon }} </span>
                        <button>{{ $t("copy") }}</button>
                      </div>
                    </NuxtLink>
                    <a :href="`${coupon.offer_link}`" target="_blank" v-else>
                      <button class="offer">
                        {{ $t("get-the-offer") }}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="side">
            <stores />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  head: {
    title: "الرئيسية - اكواد خصم",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "المنصة الأكبر والأضخم مليئة بالكوبونات وعروض الخصم من أضخم مواقع التسوق الإلكتروني. من الان نوفر على كل شروة أونلاين باستخدام كوبونات الخصم. عروض خصم نون",
      },
      {
        property: "og:title",
        content: "الرئيسية - اكواد خصم",
      },
      {
        property: "og:image",
        content: "https://akwadkhasm.com/logo.jpg",
      },
      {
        property: "og:url",
        content: "https://akwadkhasm.com",
      },
      {
        property: "og:site_name",
        content: "اكواد خصم",
      },
      {
        property: "og:description",
        content:
          "المنصة الأكبر والأضخم مليئة بالكوبونات وعروض الخصم من أضخم مواقع التسوق الإلكتروني. من الان نوفر على كل شروة أونلاين باستخدام كوبونات الخصم. عروض خصم نون",
      },
      {
        property: "og:type",
        content: "Website",
      },
      {
        property: "twitter:site",
        content: "@akwadkhasm",
      },
      {
        property: "twitter:image",
        content: "https://akwadkhasm.com/logo.jpg",
      },
      {
        property: "twitter:description",
        content:
          "المنصة الأكبر والأضخم مليئة بالكوبونات وعروض الخصم من أضخم مواقع التسوق الإلكتروني. من الان نوفر على كل شروة أونلاين باستخدام كوبونات الخصم. عروض خصم نون",
      },
      {
        property: "twitter:creator",
        content: "@akwadkhasm",
      },
      {
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        property: "twitter:title",
        content: "الرئيسية - اكواد خصم",
      },
    ],
  },
  data() {
    return {
      coupons: [],
      locale: this.$i18n.locale,
    };
  },
  mounted() {
    this.$axios
      .$get("/allcoupons")
      .then((result) => {
        this.coupons = result;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    webShareApiSupported() {
      return navigator.share;
    },
  },
  methods: {
    shareViaWebShare(title, url) {
      navigator.share({
        title: title,
        text: title,
        url: url,
      });
    },
  },
};
</script>
