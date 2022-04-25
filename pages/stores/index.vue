<template>
  <div :id="`app-${this.$i18n.locale}`">
    <div class="stores-page">
      <navbar />
      <div class="container">
        <div class="sides">
          <div class="side">
            <div class="content">
              <h1>
                {{ $t("all-stores") }}
              </h1>
              <h2>
                {{ $t("copouns-and-discounts") }} {{ new Date().getFullYear() }}
              </h2>
              <div class="cards">
                <div class="card" v-for="n in 6">
                  <NuxtLink to="/">
                    <img
                      src="https://cdn.almowafir.com/files/w200_noon.png"
                      alt=""
                    />
                  </NuxtLink>
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
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  date() {
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
