<template>
  <div class="product-quantity d-flex">
    <input
      v-model="currentValue"
      class="form-field quantity center"
      type="text"
      readonly
    >

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
export default {
  props: {
    value: { type: Number, default: 1 },
    max: { type: Number, default: Infinity }
  },

  data: () => ({

  }),

  computed: {
    currentValue: {
      set (value) {
        this.$emit('input', value);
      },

      get () {
        return this.value;
      }
    }
  },

  methods: {
    up () {
      this.currentValue += this.currentValue < this.max;
    },

    down () {
      this.currentValue -= this.currentValue > 1;
    }
  }
};
</script>
