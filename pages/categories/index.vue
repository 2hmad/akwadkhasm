<template>
  <div :id="`app-${this.$i18n.locale}`">
    <div class="cats-page">
      <Navbar />
      <div class="container">
        <div class="sides">
          <div class="side">
            <div class="content">
              <h1>
                {{ $t("all-categories") }}
              </h1>
              <div class="cats">
                <div class="cat" v-for="cat in cats" :key="cat.id">
                  <div class="cat-h">
                    <NuxtLink :to="`/categories/${cat.title_en.toLowerCase()}`">
                      <h4>{{ cat[`title_${locale}`] }}</h4>
                    </NuxtLink>
                  </div>
                  <div class="cat-subs">
                    <NuxtLink
                      :to="`/categories/${cat.title_en.toLowerCase()}/${
                        subCat.id
                      }`"
                      v-for="subCat in cat.subcategory"
                      :key="subCat.id"
                    >
                      {{ subCat[`title_${locale}`] }}
                    </NuxtLink>
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
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cats: [],
      locale: this.$i18n.locale,
    };
  },
  mounted() {
    this.$axios
      .$get("/categories")
      .then((result) => {
        this.cats = result;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
