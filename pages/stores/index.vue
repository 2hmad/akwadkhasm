<template>
  <div :id="`app-${this.$i18n.locale}`">
    <div class="stores-page">
      <Navbar />
      <div class="container">
        <div class="sides">
          <div class="side">
            <div class="content">
              <h1>
                {{ $t("all-stores") }}
              </h1>
              <h2>
                {{ $t("coupons-and-discounts") }} {{ new Date().getFullYear() }}
              </h2>
              <div class="cards">
                <div class="card" v-for="store in stores" :key="store.id">
                  <NuxtLink :to="`/stores/${store.id}`">
                    <img
                      :src="`http://127.0.0.1:8000/storage/stores/${store.pic}`"
                      :alt="store.title_en"
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
    <Footer />
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
      .$get("http://127.0.0.1:8000/api/stores")
      .then((result) => {
        this.stores = result;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
