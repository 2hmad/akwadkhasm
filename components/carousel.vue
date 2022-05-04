<template>
  <swiper class="swiper" :options="swiperOptions">
    <swiper-slide v-for="carousel in carousels" :key="carousel.id">
      <a :href="`${carousel.link}`" target="_blank">
        <img
          :src="`http://admin.akwadkhasm.com/storage/carousels/${carousel.pic}`"
        />
      </a>
    </swiper-slide>
  </swiper>
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
  data() {
    return {
      carousels: [],
      swiperOptions: {
        autoplay: {
          delay: 4000,
          disableOnInteraction: true,
        },
      },
    };
  },
  mounted() {
    this.$axios
      .$get("/carousels")
      .then((result) => {
        this.carousels = result;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
