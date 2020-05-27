<template>
  <label class="md-wrapper">
    <textarea
      v-if="type === 'textarea'"
      v-model="computedValue"
      class="form-field"
      :class="{ active }"
      :type="type"
      :name="name"
      :required="required"
    />

    <input
      v-else
      v-model="computedValue"
      class="form-field"
      :class="{ active }"
      :type="type"
      :name="name"
      :required="required"
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
    muted: { type: String, default: '' },
    required: { type: Boolean, default: false }
  },

  computed: {
    computedValue: {
      set (value) {
        this.$emit('input', value);
      },

      get () {
        return this.value;
      }
    },

    active () {
      return this.value.trim().length > 0;
    }
  }
};
</script>
