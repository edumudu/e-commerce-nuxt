<template>
  <li
    class="menu-item"
    :class="{ active }"
  >
    <a
      href="#"
      class="menu-link-title"
      @click.prevent="handleClick"
    >
      <span>
        <fa :icon="icon" />

        {{ title }}
      </span>

      <fa
        :icon="['fas', 'angle-right']"
        :class="{ active }"
      />
    </a>

    <ul class="menu-subtree">
      <slot />
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: Array, default: () => [] },
    isActive: { type: Boolean, default: false },
  },

  data: () => ({
    active: false,
  }),

  created () {
    this.active = this.isActive;
  },

  methods: {
    handleClick () {
      this.$emit('click', this);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/dashboard/menu/menu-item';
</style>
