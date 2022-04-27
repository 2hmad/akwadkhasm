<template>
  <nav class="headers">
    <div class="header">
      <div class="brand">
        <a href="/">
          <img src="/CODE.svg" :alt="`${$t('akwadkhasm')}`" />
        </a>
      </div>
      <div class="search">
        <div class="lang">
          <a
            href="#"
            @click.prevent="changeLocale('en')"
            v-if="$i18n.locale == 'ar'"
          >
            English
          </a>
          <a
            href="#"
            @click.prevent="changeLocale('ar')"
            v-else-if="$i18n.locale == 'en'"
          >
            العربية
          </a>
        </div>
        <form method="POST" :action="`/search/${searchKeyword}`">
          <input
            type="text"
            :placeholder="$t('search-for-coupons')"
            v-model="searchKeyword"
            required
          />
          <button type="submit"><img src="/icons/icons8-search.svg" /></button>
        </form>
      </div>
    </div>
    <div class="subheader">
      <ul class="cats">
        <!-- <li>
          <NuxtLink to="/"> {{ $t("offers") }} </NuxtLink>
        </li> -->
        <li>
          <NuxtLink to="/categories">{{ $t("all-categories") }}</NuxtLink>
        </li>
        <li v-for="cat in cats" :key="cat.id">
          <NuxtLink :to="`/categories/${cat[`title_en`].toLowerCase()}`">
            {{ cat[`title_${locale}`] }}
          </NuxtLink>
        </li>
      </ul>
      <div class="open" @click="openSideBar">
        <img src="/icons/bar.svg" />
      </div>
      <div class="sidebar" style="display: none">
        <img src="/icons/close.svg" @click="closeSideBar" />
        <ul>
          <li>
            <NuxtLink to="/categories">{{ $t("all-categories") }}</NuxtLink>
          </li>
          <li v-for="cat in cats" :key="cat.id">
            <NuxtLink :to="`/categories/${cat[`title_en`].toLowerCase()}`">
              {{ cat[`title_${locale}`] }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      searchKeyword: "",
      cats: [],
      locale: this.$i18n.locale,
    };
  },
  mounted() {
    this.$axios
      .$get("/categories-limit/12")
      .then((result) => {
        this.cats = result;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.setLocale(locale);
      window.location.reload();
    },
    openSideBar() {
      document.querySelector(".sidebar").style.display = "flex";
    },
    closeSideBar() {
      document.querySelector(".sidebar").style.display = "none";
    },
  },
};
</script>
