<template>
  <div :id="`app-${this.$i18n.locale}`">
    <div class="cat-page">
      <Navbar />
      <div class="container">
        <div class="sides">
          <div class="side">
            <div class="content">
              <h1>
                {{ $t("coupons-and-discounts") }} {{ new Date().getFullYear() }}
              </h1>
              <div class="cards">
                <div class="card" v-for="coupon in coupons" :key="coupon.id">
                  <div class="header">
                    <NuxtLink :to="`/stores/${coupon.store.id}`">
                      <div class="brand">
                        <img
                          :src="`http://127.0.0.1:8000/storage/stores/${coupon.store.pic}`"
                          alt=""
                        />
                      </div>
                    </NuxtLink>
                    <button
                      class="share"
                      @click="
                        shareViaWebShare(
                          coupon[`title_${locale}`],
                          `https://akwadkhasm.com/redirect/${coupon.id}`
                        )
                      "
                    >
                      <img src="/icons/icons8-share.svg" />
                    </button>
                  </div>
                  <div class="content">
                    <NuxtLink :to="`/redirect/${coupon.id}`">
                      <h3>{{ coupon[`title_${locale}`] }}</h3>
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
  data() {
    return {
      coupons: [],
      locale: this.$i18n.locale,
    };
  },
  mounted() {
    this.$axios
      .$get(`/coupons-by-subcat/${this.$route.params.subcat}`)
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
