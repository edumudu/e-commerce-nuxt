<template>
  <label class="md-wrapper my-1">
    <textarea
      v-if="type === 'textarea'"
      v-model="computedValue"
      class="form-field"
      :class="{ active }"
      :type="type"
      :name="name"
      @blur="changeActive"
    />

    <input
      v-else
      v-model="computedValue"
      class="form-field"
      :class="{ active }"
      :type="type"
      :name="name"
      @blur="changeActive"
    >

    <span class="md-float" v-text="placeholder" />

    <span
      v-if="muted"
      class="text-muted"
    >
      {{ muted }}
    </span>
  </label>
</template>

<script>
export default {
  props: {
    type: { type: String, default: 'text' },
    value: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    name: { type: String, default: '' },
    muted: { type: String, default: '' }
  },

  data: () => ({
    active: false
  }),

  computed: {
    computedValue: {
      set (value) {
        this.$emit('input', value);
      },

      get () {
        return this.value;
      }
    }
  },

  methods: {
    changeActive () {
      this.active = this.value.trim().length > 0;
    }
  }
};
</script>
