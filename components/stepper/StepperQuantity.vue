<template>
  <div class="product-quantity d-flex">
    <base-input
      v-model="val"
      class="quantity"
      type="text"
      readonly
    />

    <div class="quantity-buttons">
      <button
        class="up"
        @click="up"
      >
        <fa :icon="['fas', 'angle-up']" />
      </button>

      <button
        class="down"
        @click="down"
      >
        <fa :icon="['fas', 'angle-down']" />
      </button>
    </div>
  </div>
</template>

<script>
import stepper from '~/mixins/stepper';

export default {
  mixins: [stepper],
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/_product-quantity';
</style>
