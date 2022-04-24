<template>
  <div :id="`app-${this.$i18n.locale}`">
    <navbar />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
