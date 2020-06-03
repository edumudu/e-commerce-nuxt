<template>
  <div class="rating-stars">
    <input
      v-model="curentValue"
      class="review-range"
      type="range"
      step="0.25"
    >

    <ul
      v-if="editable"
      key="stars-read-only"
      class="rating-stars d-flex"
      :title="curentValue"
    >
      <li
        v-for="index in 5"
        :key="index"
        :class="{ checked: (curentValue / index) >= 1 }"
        @mouseover="hoverStar(index)"
        @mouseleave="hoverLeave"
        @click="setValue(index)"
      >
        <fa :icon="[(curentValue / index) >= 1 ? 'fas' : 'far', 'star']" />
      </li>
    </ul>

    <ul
      v-else
      key="stars-edit"
      class="rating-stars d-flex"
      :title="curentValue"
    >
      <li
        v-for="index in 5"
        :key="index"
        :class="{ checked: (curentValue / index) >= 1 }"
      >
        <fa :icon="[(curentValue / index) >= 1 ? 'fas' : 'far', 'star']" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: [Number, String], required: true },
    editable: { type: Boolean, default: false }
  },

  data: () => ({
    virtuaValue: 0
  }),

  computed: {
    curentValue: {
      set (value) {
        this.$emit('input', +value);
      },

      get () {
        return this.virtuaValue || this.value;
      }
    }
  },

  methods: {
    hoverStar (index) {
      this.virtuaValue = index;
    },

    hoverLeave () {
      this.virtuaValue = 0;
    },

    setValue (index) {
      this.curentValue = index;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/_rating-stars';
</style>
