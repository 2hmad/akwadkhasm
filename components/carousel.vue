<template>
  <swiper class="swiper">
    <swiper-slide v-for="carousel in carousels" :key="carousel.id">
      <a :href="`${carousel.link}`">
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
