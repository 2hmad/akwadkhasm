<template>
  <div class="footer">
    <ul>
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
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
