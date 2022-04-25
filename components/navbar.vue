<template>
  <nav class="headers">
    <div class="header">
      <div
        class="brand"
        style="width: 200px; height: 84px; border: 1px solid #ccc"
      >
        <a href="/">
          <img src="" :alt="`${$t('akwadkhasm')}`" />
        </a>
      </div>
      <div class="search">
        <div class="lang">
          <a
            href="#"
            @click.prevent="$i18n.setLocale('en')"
            v-if="$i18n.locale == 'ar'"
          >
            English
          </a>
          <a
            href="#"
            @click.prevent="$i18n.setLocale('ar')"
            v-else-if="$i18n.locale == 'en'"
          >
            العربية
          </a>
        </div>
        <form>
          <input type="text" :placeholder="$t('search-for-coupons')" />
          <button><img src="/icons/icons8-search.svg" /></button>
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
        <li v-for="n in 10">
          <NuxtLink to="/">الكترونيات</NuxtLink>
        </li>
      </ul>
      <div class="open" @click="openSideBar">
        <img src="/icons/bar.svg" />
      </div>
      <div class="sidebar" style="display: none">
        <img src="/icons/close.svg" @click="closeSideBar" />
        <ul>
          <li>
            <NuxtLink to="/"> {{ $t("offers") }} </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/categories">{{ $t("all-categories") }}</NuxtLink>
          </li>
          <li v-for="n in 10">
            <NuxtLink to="/">الكترونيات</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    openSideBar() {
      document.querySelector(".sidebar").style.display = "flex";
    },
    closeSideBar() {
      document.querySelector(".sidebar").style.display = "none";
    },
  },
};
</script>
