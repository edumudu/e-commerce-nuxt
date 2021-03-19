<template>
  <ul class="menu">
    <slot />
  </ul>
</template>

<script>
export default {
  data: () => ({
    items: [],
  }),

  created () {
    this.items = this.$children;
  },

  mounted () {
    Array.from(this.items, item => item.$on('click', this.handleClick));
  },

  methods: {
    handleClick (selectedItem) {
      this.items.forEach((item) => {
        item.active = !item.active && item.title === selectedItem.title;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/dashboard/menu/menu';
</style>
