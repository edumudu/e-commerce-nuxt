<template>
  <div class="product-image">
    <img
      class="responsive-img active"
      :src="imgs[active] && imgs[active].image || 'https://via.placeholder.com/450x500?text=Not%20Photo'"
    >

    <div class="product-other-images py-3">
      <div class="galery-wrapper d-flex">
        <img
          v-for="(img, index) in imgs"
          :key="index"
          class="responsive-img"
          :class="{ active: active === index }"
          :src="img.image"
          @click="setImg(index)"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgs: { type: Array, required: true },
    start: { type: Number, default: 0 },
  },

  data: () => ({
    active: 0,
  }),

  mounted () {
    this.active = this.start || this.active;
  },

  methods: {
    setImg (index) {
      this.active = index;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/_product-img-carrousel';
</style>
