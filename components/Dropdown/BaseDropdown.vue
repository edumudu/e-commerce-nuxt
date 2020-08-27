<template>
  <div class="dropdown">
    <span class="dropdown-toggle">
      <slot name="toggle" />
    </span>

    <ul
      v-if="isList"
      class="dropdown-content"
    >
      <slot />
    </ul>

    <div
      v-else
      class="dropdown-content"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isList: { type: Boolean, default: true },
  },
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/dropdown/_dropdown';
</style>
