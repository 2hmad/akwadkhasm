<template>
  <div class="footer-page">
    <ul>
      <li>
        <h3>{{ $t("stores") }}</h3>
        <NuxtLink
          :to="`/stores/${store.id}`"
          v-for="store in stores"
          :key="store.id"
        >
          {{ store.title }}
        </NuxtLink>
      </li>
      <li>
        <h3>{{ $t("short-links") }}</h3>
        <NuxtLink to="/stores">{{ $t("all-stores") }}</NuxtLink>
        <NuxtLink to="/about">{{ $t("about-us") }}</NuxtLink>
        <NuxtLink to="/contact">{{ $t("contact-us") }}</NuxtLink>
      </li>
      <li>
        <h3>{{ $t("informations") }}</h3>
        <NuxtLink to="/">{{ $t("terms-condition") }}</NuxtLink>
        <NuxtLink to="/">{{ $t("privacy-policy") }}</NuxtLink>
      </li>
      <li class="social">
        <h3>{{ $t("follow-us") }}</h3>
        <div style="margin-top: 15px; gap: 10px; display: flex">
          <a href="https://www.facebook.com/akwadkhasmm">
            <img src="/icons/icons8-facebook.svg" />
          </a>
          <a href="https://twitter.com/mahmouedsaid15">
            <img src="/icons/icons8-twitter.svg" />
          </a>
          <a href="https://www.instagram.com/akwadkhasm7/">
            <img src="/icons/icons8-instagram.svg" />
          </a>
        </div>
      </li>
    </ul>
    <div class="rights">
      <span>
        تمت التصميم والبرمجة بواسطة شركة
        <a
          href="https://digitwires.com"
          style="text-decoration: underline"
          target="_blank"
        >
          ديجيت وايرز
        </a>
      </span>
      <span>
        &copy; {{ $t("all-rights-reserved") }} {{ $t("akwadkhasm") }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stores: [],
      locale: this.$i18n.locale,
    };
  },
  mounted() {
    this.$axios
      .$get("/common-stores/7")
      .then((result) => {
        this.stores = result;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
