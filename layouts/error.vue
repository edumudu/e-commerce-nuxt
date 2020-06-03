<template>
  <div class="error-404">
    <div class="error-404-container">
      <h1
        v-if="error.statusCode === 404"
        class="error-404-title"
      >
        Page not found
      </h1>

      <h1
        v-else
        class="error-404-title"
      >
        An error occurred
      </h1>

      <nuxt-link
        to="/"
        class="error-404-link"
      >
        Home page
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: { type: Object, default: () => {} }
  }
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/_errors';
</style>
