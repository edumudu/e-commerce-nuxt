<template>
  <div>
    <header-site />

    <nuxt />
  </div>
</template>

<script>
import HeaderSite from '~/components/page-components/Header-site.vue'

export default {
  components: {
    HeaderSite
  }
}
</script>

<style lang="scss">
  @import '~assets/scss/app.scss';
</style>
