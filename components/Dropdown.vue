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
    isList: { type: Boolean, default: true }
  },

  data: () => ({
    active: false
  }),

  methods: {
    open () {
      this.active = true;
    },

    close () {
      this.active = false;
    },

    toggle () {
      this.active = !this.active;
    }
  }
};
</script>
