<template>
  <div
    class="collapse"
    :class="{ active }"
  >
    <h3 @click="toggleActive">
      {{ title }}
    </h3>

    <div class="collapsable">
      <p>
        <slot />
      </p>

      <div class="d-flex">
        <base-input
          name="cupom"
          class="mr-3"
          :placeholder="inputPlaceholder"
        />

        <button class="btn btn-small">
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from '~/components/form/BaseInput.vue';

export default {
  components: {
    BaseInput
  },

  props: {
    title: { type: String, required: true },
    inputPlaceholder: { type: String, default: '' },
    buttonText: { type: String, default: '' }
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

<style lang="scss" scoped>
  @import '~/assets/scss/keyframes/collapse';
  @import '~/assets/scss/components/_collapse-cart';
</style>
