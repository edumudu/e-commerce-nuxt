<template>
  <ul class="menu">
    <slot />
  </ul>
</template>

<script>
export default {
  data: () => ({
    items: []
  }),

  created () {
    this.items = this.$children;
  },

  mounted () {
    Array.from(this.items, item => item.$on('click', this.handleClick));
  },

  methods: {
    handleClick (selectedItem) {
      Array.from(this.items, (item) => {
        item.active = !item.active && item.title === selectedItem.title;
      });
    }
  }
};
</script>
