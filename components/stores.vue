<template>
  <div class="fav-stores">
    <h3>{{ $t("popular-stores") }}</h3>
    <div class="stores">
      <ul>
        <li v-for="store in stores" :key="store.id">
          <NuxtLink :to="`/stores/${store.id}`">
            <div class="store">
              <img
                :src="`http://127.0.0.1:8000/storage/stores/${store.pic}`"
                :alt="store.title_en"
              />
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <NuxtLink to="/stores">
      <button class="see-more">{{ $t("see-more") }}</button>
    </NuxtLink>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stores: [],
    };
  },
  mounted() {
    this.$axios
      .$get("/common-stores/12")
      .then((result) => {
        this.stores = result;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
