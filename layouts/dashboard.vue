<template>
  <main id="dashboard-page">
    <Aside />

    <div id="dashboard-page-content">
      <dashboard-header />

      <nuxt />
    </div>
  </main>
</template>

<script>
import Aside from '~/components/dashboard/Aside.vue';
import DashboardHeader from '~/components/dashboard/DashboardHeader.vue';

export default {
  middleware: 'auth',

  components: {
    Aside,
    DashboardHeader
  }
};
</script>

<style lang="scss">
  @import '~assets/scss/dashboard';
</style>
