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
        <Input
          name="cupom"
          class="mr-3"
          :placeholder="inputPlaceholder"
        />

        <button class="btn-small">
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '~/components/Input.vue';

export default {
  components: {
    Input
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
