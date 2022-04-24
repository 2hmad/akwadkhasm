<template>
  <nav class="headers">
    <div class="header">
      <div class="brand">
        <img
          src="https://cdn.almowafir.com/1/alm_logo_r2021_ar.png"
          :alt="`${$t('akwadkhasm')}`"
        />
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
        <li>
          <NuxtLink to="/"> {{ $t("offers") }} </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">{{ $t("all-categories") }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">{{ $t("all-stores") }}</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
