<template>
  <label class="md-wrapper">
    <textarea
      v-if="$attrs.type === 'textarea'"
      class="form-field"
      :class="classes"
      :value="value"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    />

    <input
      v-else
      class="form-field"
      :class="classes"
      :value="value"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    >

    <span class="md-float" v-text="placeholder" />

    <span
      v-if="error"
      class="invalid-message"
    >
      {{ error }}
    </span>

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
  inheritAttrs: false,

  props: {
    value: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    muted: { type: String, default: '' },
    error: { type: String, default: '' },
    isValid: { type: Boolean, default: false },
    inputClass: { type: String, default: '' }
  },

  computed: {
    active () {
      return this.value.trim().length > 0;
    },

    classes () {
      return [
        this.inputClass,
        {
          active: this.active,
          'is-invalid': !!this.error,
          'is-valid': this.isValid
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/form/_text-field';
</style>
