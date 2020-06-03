<template>
  <div class="stepper">
    <input
      v-model="val"
      type="text"
    >

    <span class="d-flex justify-content-center align-items-center flex-column">
      <button @click="up">
        <fa :icon="['fas', 'angle-up']" />
      </button>

      <button @click="down">
        <fa :icon="['fas', 'angle-down']" />
      </button>
    </span>
  </div>
</template>

<script>
import stepper from '~/mixins/stepper';

export default {
  mixins: [stepper]
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/_stepper';
</style>
