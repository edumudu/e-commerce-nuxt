<template>
  <div class="dropdown">
    <a
      href="#"
      class="dropdown-toggle"
      @click.prevent
    >
      <slot name="toggle" />
    </a>

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
