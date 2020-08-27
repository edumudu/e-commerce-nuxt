<template>
  <li class="dropdown-item">
    <nuxt-link
      class="dropdown-item-link"
      :to="`/product/${product.slug}`"
    >
      <img
        class="dropdown-item-img"
        :src="product.photos[0]"
        :alt="product.name"
      >

      <div>
        <h3
          class="dropdown-item-name"
          :title="product.name"
        >
          {{ product.name }}
        </h3>

        <span class="dropdown-item-price">
          R$ {{ (product.price * product.quantity).toFixed(2) }}
        </span>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/dropdown/dropdown-item-cart';
</style>
