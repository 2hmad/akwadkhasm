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
                <div class="cat" v-for="n in 4">
                  <div class="cat-h">
                    <NuxtLink to="/">
                      <h4>electronics-الالكترونيات</h4>
                    </NuxtLink>
                  </div>
                  <div class="cat-subs">
                    <NuxtLink to="/">تلفزيونات</NuxtLink>
                    <NuxtLink to="/">تلفزيونات</NuxtLink>
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
  date() {
    return {};
  },
};
</script>
