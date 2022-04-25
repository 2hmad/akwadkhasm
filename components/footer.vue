<template>
  <div class="footer-page">
    <ul>
      <li>
        <h3>{{ $t("stores") }}</h3>
        <NuxtLink to="/">Noon</NuxtLink>
        <NuxtLink to="/">Noon</NuxtLink>
        <NuxtLink to="/">Noon</NuxtLink>
        <NuxtLink to="/">Noon</NuxtLink>
        <NuxtLink to="/">Noon</NuxtLink>
        <NuxtLink to="/">Noon</NuxtLink>
      </li>
      <li>
        <h3>{{ $t("short-links") }}</h3>
        <NuxtLink to="/">{{ $t("all-stores") }}</NuxtLink>
        <NuxtLink to="/">{{ $t("about-us") }}</NuxtLink>
        <NuxtLink to="/">{{ $t("contact-us") }}</NuxtLink>
      </li>
      <li>
        <h3>{{ $t("informations") }}</h3>
        <NuxtLink to="/">{{ $t("terms-condition") }}</NuxtLink>
        <NuxtLink to="/">{{ $t("privacy-policy") }}</NuxtLink>
      </li>
      <li class="social">
        <h3>{{ $t("follow-us") }}</h3>
        <div style="margin-top: 15px; gap: 10px; display: flex">
          <a href="#"><img src="/icons/icons8-facebook.svg" /></a>
          <a href="#"><img src="/icons/icons8-twitter.svg" /></a>
          <a href="#"><img src="/icons/icons8-telegram-app.svg" /></a>
        </div>
      </li>
    </ul>
    <div class="rights">
      <span>
        &copy; {{ $t("all-rights-reserved") }} {{ $t("akwadkhasm") }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
