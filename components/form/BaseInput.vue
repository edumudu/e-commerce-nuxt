<template>
  <label class="md-wrapper">
    <textarea
      v-if="type === 'textarea'"
      class="form-field"
      :class="classes"
      :value="value"
      v-bind="$attrs"
      v-on="events"
      @input="$emit('input', $event.target.value)"
    />

    <input
      v-else
      class="form-field"
      :class="classes"
      :value="value"
      :type="inputType"
      v-bind="$attrs"
      v-on="events"
      @input="$emit('input', $event.target.value)"
    >

    <span class="md-float" v-text="placeholder" />

    <div
      v-if="isPassword"
      class="icon-password"
    >
      <fa
        v-if="passwordIsVisible"
        :icon="['fas', 'eye-slash']"
        @click="toggleVisible"
      />

      <fa
        v-else
        :icon="['fas', 'eye']"
        @click="toggleVisible"
      />
    </div>

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
    type: { type: String, default: 'text' },
    value: { type: [String, Number], default: '' },
    placeholder: { type: String, default: '' },
    muted: { type: String, default: '' },
    error: { type: String, default: '' },
    isValid: { type: Boolean, default: false },
    inputClass: { type: String, default: '' },
  },

  data: () => ({
    inputType: null,
  }),

  computed: {
    active () {
      return typeof this.value === 'string' ? this.value.trim().length > 0 : true;
    },

    classes () {
      return [
        this.inputClass,
        {
          active: this.active,
          'is-invalid': !!this.error,
          'is-valid': this.isValid,
        },
      ];
    },

    events () {
      return Object.entries(this.$listeners)
        .filter(([key]) => key !== 'input')
        .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
    },

    isPassword () {
      return this.type === 'password';
    },

    passwordIsVisible () {
      return this.inputType !== 'password';
    },
  },

  created () {
    this.inputType = this.type;
  },

  methods: {
    toggleVisible () {
      this.inputType = this.inputType === 'password' ? 'text' : 'password';
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/form/_text-field';
</style>
