<template>
  <swiper class="swiper">
    <swiper-slide v-for="carousel in carousels" :key="carousel.id">
      <a :href="`${carousel.link}`">
        <img :src="`http://127.0.0.1:8000/storage/carousels/${carousel.pic}`" />
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
