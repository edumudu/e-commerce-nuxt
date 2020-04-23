<template>
  <div class="product-image">
    <img
      class="responsive-img active"
      :src="imgs[active]"
    >

    <div class="product-other-images py-3">
      <div class="galery-wrapper d-flex">
        <img
          v-for="(img, index) in imgs"
          :key="index"
          class="responsive-img"
          :class="{ active: active === index }"
          :src="img"
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
    start: { type: Number, default: 0 }
  },

  data: () => ({
    active: 0
  }),

  mounted () {
    this.active = this.start || this.imgs.indexOf(this.imgs.find(img => img.includes('thumb')));
  },

  methods: {
    setImg (index) {
      this.active = index;
    }
  }
};
</script>
