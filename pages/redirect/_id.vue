<template>
  <div :id="`app-${this.$i18n.locale}`">
    <div class="redirect-page">
      <Navbar />
      <div class="container">
        <img src="/icons/icons8-check-circle.svg" />
        <h2>{{ $t("coupon-copied") }}</h2>
        <p>{{ $t("use-it-in-cart") }}</p>
        <div class="coupon">{{ coupon.coupon }}</div>
        <p>{{ $t("we-will-redirect-you-within") }}</p>
        <h3 class="counter">{{ timer }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: 3,
      coupon: [],
    };
  },
  mounted() {
    this.$axios
      .$get(`/coupon/${this.$route.params.id}`)
      .then((result) => {
        this.coupon = result;
        navigator.clipboard.writeText(this.coupon.coupon);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {
    timer: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timer--;
          }, 1000);
        }
        if (value == 0) {
          window.location.href = this.coupon.store.website;
        }
      },
      immediate: true,
    },
  },
};
</script>
