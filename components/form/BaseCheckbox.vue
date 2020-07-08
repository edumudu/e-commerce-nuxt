<template>
  <label>
    <input
      type="checkbox"
      :checked="value"
      @input="$emit('input', $event.target.checked)"
    >

    <span />
    <slot />
  </label>
</template>

<script>
export default {
  props: {
    value: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/form/_checkbox';
</style>
