<template>
  <main id="dashboard-page">
    <the-aside-dashboard />

    <div id="dashboard-page-content">
      <the-header-dashboard />

      <nuxt />
    </div>
  </main>
</template>

<script>
import TheAsideDashboard from '~/components/dashboard/TheAsideDashboard.vue';
import TheHeaderDashboard from '~/components/dashboard/TheHeaderDashboard.vue';

export default {
  middleware: 'auth',
  layoutTransition: 'layout',

  components: {
    TheAsideDashboard,
    TheHeaderDashboard
  }
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/page-components/dashboard-content';
</style>
