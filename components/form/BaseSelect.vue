<template>
  <div
    ref="selectBox"
    class="select-wrapper"
    :class="{ active }"
  >
    <div
      class="select-default-option"
      @click="toggleActive"
    >
      <base-input
        :value="getNames"
        v-bind="$attrs"
        type="text"
        input-class="readonly-no-opacity"
        readonly
      />

      <select
        v-model="getValue"
        :name="name"
        :multiple="multiple"
      >
        <option
          v-for="(option, index) in options"
          :key="index"
          :value="option.id"
          v-text="option.name"
        />
      </select>
    </div>

    <ul class="select-ul">
      <li
        v-for="(option, index) in options"
        :key="index"
        class="select-option"
        @click="choseOption(option)"
      >
        <checkout
          v-if="multiple"
          class="select-option-check"
          :value="value.includes(option.id)"
        />

        <p class="select-option-text">
          {{ option.name || option.id }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import BaseInput from '~/components/form/BaseInput.vue';
import Checkout from '~/components/form/BaseCheckout.vue';

export default {
  components: {
    BaseInput,
    Checkout
  },
  inheritAttrs: false,

  props: {
    options: { type: Array, default: () => [] },
    multiple: { type: Boolean, default: false },
    value: { type: [String, Array, Number], default: '' },
    name: { type: String, default: '' }
  },

  data: () => ({
    active: false
  }),

  computed: {
    getValue: {
      get () {
        return this.multiple ? (this.value || []) : this.value;
      },

      set (value) {
        this.$emit('input', value);
      }
    },

    getNames () {
      return this.isArray
        ? this.getValue.map(option => this.options.find(o => o.id === option).name).join(', ')
        : (this.getValue && this.options.find(o => o.id === this.getValue)?.name);
    },

    isArray () {
      return this.multiple && Array.isArray(this.getValue);
    }
  },

  beforeMount () {
    window.addEventListener('click', this.close);
  },

  beforeDestroy () {
    window.removeEventListener('click', this.close);
  },

  methods: {
    toggleActive () {
      this.active = !this.active;
    },

    close (e = {}) {
      if (!this.$refs.selectBox.contains(e.target)) {
        this.active = false;
      }
    },

    choseOption (option) {
      if (!this.multiple) {
        this.getValue = option.id;
        this.close();

        return;
      }

      if (this.getValue.includes(option.id)) {
        this.getValue = this.getValue.filter(v => v !== option.id);
      } else {
        this.getValue = [...this.getValue, option.id];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/form/_selectbox';
</style>
