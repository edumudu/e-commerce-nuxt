<template>
  <main id="page">
    <header-site />

    <nuxt />

    <footer-site />
  </main>
</template>

<script>
import HeaderSite from '~/components/page-components/Header-site.vue';
import FooterSite from '~/components/page-components/Footer-site.vue';

export default {
  components: {
    HeaderSite,
    FooterSite
  },

  mounted () {
    // init cart
    this.$store.commit('cart/setCart', JSON.parse(localStorage.getItem('cart')) || []);
    this.$store.dispatch('cart/fetchProducts');
  }
};
</script>

<style lang="scss">
  @import '~assets/scss/app.scss';
</style>
