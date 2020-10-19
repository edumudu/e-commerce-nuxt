<template>
  <ul class="d-flex flex-nowrap images-view">
    <li
      v-for="(image, index) in urls"
      :key="index"
      class="col-12 col-sm-6 col-md-3 col-lg-2 images-view-item"
    >
      <img
        class="images-item"
        :src="image"
      >

      <fa
        class="images-view-remove"
        :icon="['far', 'times-circle']"
        @click="$emit('remove', index)"
      />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },

  computed: {
    urls () {
      return this.images.map(image => URL.createObjectURL(image));
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/form/_file-input-images';
</style>
