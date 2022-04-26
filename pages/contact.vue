<template>
  <div :id="`app-${this.$i18n.locale}`">
    <div class="contact-page">
      <Navbar />
      <div class="container">
        <div class="sides">
          <div class="side">
            <h1>{{ $t("contact-us") }}</h1>
            <div class="email">
              <img src="/icons/icons8-email-open.svg" />
              <a href="mailto:coupomcode@gmail.com">{{ $t("email") }}</a>
            </div>
            <div class="whatsapp">
              <img src="/icons/icons8-whatsapp.svg" />
              <a href="https://wa.me/+20000000?text=مرحباً احتاج الي المساعدة">
                {{ $t("whatsapp") }}
              </a>
            </div>
          </div>
          <div class="side">
            <stores />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
