<template>
  <div :id="`app-${this.$i18n.locale}`">
    <div class="search-page">
      <Navbar />
      <div class="container">
        <h2>
          {{ $t("search-results") }} ({{ coupons.length + stores.length }})
        </h2>
        <div class="cards">
          <div
            class="card"
            v-for="store in stores"
            :key="store.id"
            style="width: 200px; height: 100px"
          >
            <NuxtLink
              :to="`/stores/${store.id}`"
              style="width: 100%; height: 100%"
            >
              <img
                :src="`http://admin.akwadkhasm.com/storage/stores/${store.pic}`"
                :alt="store.title"
                style="width: 100%; height: 100%; object-fit: contain"
              />
            </NuxtLink>
          </div>
        </div>
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
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: this.$route.params.title,
      coupons: [],
      stores: [],
      locale: this.$i18n.locale,
    };
  },
  mounted() {
    this.$axios
      .$get(`/search/${this.keyword}`)
      .then((result) => {
        this.coupons = result;
      })
      .catch((err) => {
        console.log(err);
      });
    this.$axios
      .$get(`/search-store/${this.keyword}`)
      .then((result) => {
        this.stores = result;
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
