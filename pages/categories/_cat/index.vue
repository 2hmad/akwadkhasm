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
                <div class="card" v-for="n in 6">
                  <div class="header">
                    <NuxtLink to="/">
                      <div class="brand">
                        <img
                          src="https://cdn.almowafir.com/files/w200_noon.png"
                          alt=""
                        />
                      </div>
                    </NuxtLink>
                    <button
                      class="share"
                      @click="shareViaWebShare('test title', 'test content')"
                    >
                      <img src="/icons/icons8-share.svg" />
                    </button>
                  </div>
                  <div class="content">
                    <NuxtLink to="/">
                      <h3>خصم حتى 20% على الموبايلات + 10% إضافي</h3>
                    </NuxtLink>
                  </div>
                  <div class="footer">
                    <NuxtLink to="/">
                      <div class="coupon">
                        <span> DG2 </span>
                        <button>{{ $t("copy") }}</button>
                      </div>
                    </NuxtLink>
                    <a href="/" target="_blank">
                      <button class="offer" style="display: none">
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
    return {};
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
