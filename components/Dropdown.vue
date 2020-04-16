<template>
  <div class="dropdown">
    <span class="dropdown-toggle">
      <slot name="toggle" />
    </span>

    <ul class="dropdown-content">
      <slot />
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: false
  }),

  methods: {
    open () {
      this.active = true
    },

    close () {
      this.active = false
    },

    toggle () {
      this.active = !this.active
    }
  }
}
</script>
