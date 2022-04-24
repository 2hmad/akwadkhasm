<template>
  <div :id="`app-${this.$i18n.locale}`">
    <div class="index-page">
      <navbar />
      <div class="container">
        <div class="sides">
          <div class="side">
            <div class="carousel">
              <swiper class="swiper">
                <swiper-slide>
                  <a href="#">
                    <img src="https://cdn.almowafir.com/1/Shein-AR.jpeg" />
                  </a>
                </swiper-slide>
              </swiper>
            </div>
            <div class="content">
              <h2>
                {{ $t("copouns-and-discounts") }} {{ new Date().getFullYear() }}
              </h2>
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
                      <div class="copoun">
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
