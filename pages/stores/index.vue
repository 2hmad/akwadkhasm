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
  head: {
    title: "جميع المتاجر - اكواد خصم",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "افضل موقع كوبونات خصم - موقع اكواد خصم من افضل مواقع كوبونات الخصم في الوطن العربي لتوفير المال عند التسوق سوف تجد فيه اي كود خصم",
      },
      {
        property: "og:title",
        content: "جميع المتاجر - اكواد خصم",
      },
      {
        property: "og:image",
        content: "https://akwadkhasm.com/logo.jpg",
      },
      {
        property: "og:url",
        content: "https://akwadkhasm.com",
      },
      {
        property: "og:site_name",
        content: "اكواد خصم",
      },
      {
        property: "og:description",
        content:
          "افضل موقع كوبونات خصم - موقع اكواد خصم من افضل مواقع كوبونات الخصم في الوطن العربي لتوفير المال عند التسوق سوف تجد فيه اي كود خصم",
      },
      {
        property: "og:type",
        content: "Website",
      },
      {
        property: "twitter:site",
        content: "@akwadkhasm",
      },
      {
        property: "twitter:image",
        content: "https://akwadkhasm.com/logo.jpg",
      },
      {
        property: "twitter:description",
        content:
          "افضل موقع كوبونات خصم - موقع اكواد خصم من افضل مواقع كوبونات الخصم في الوطن العربي لتوفير المال عند التسوق سوف تجد فيه اي كود خصم",
      },
      {
        property: "twitter:creator",
        content: "@akwadkhasm",
      },
      {
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        property: "twitter:title",
        content: "جميع المتاجر - اكواد خصم",
      },
    ],
  },
  data() {
    return {
      stores: [],
    };
  },
  mounted() {
    this.$axios
      .$get("/stores")
      .then((result) => {
        this.stores = result;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
