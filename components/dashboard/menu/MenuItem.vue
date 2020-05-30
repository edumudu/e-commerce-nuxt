<template>
  <li
    class="menu-item"
    :class="{ active }"
  >
    <a
      href="#"
      class="menu-link-title"
      @click.prevent="toggleActive"
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
    icon: { type: Array, default: () => [] }
  },

  data: () => ({
    active: false
  }),

  methods: {
    toggleActive () {
      this.active = !this.active;
    }
  }
};
</script>
