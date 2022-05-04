<template>
  <swiper class="swiper">
    <swiper-slide>
      <a href="#">
        <img src="https://via.placeholder.com/900x300?text=Ad+Preview" />
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
