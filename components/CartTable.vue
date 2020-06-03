<template>
  <table class="table-responsive">
    <thead>
      <tr>
        <td />
        <td>nome do produto</td>
        <td>Modelo</td>
        <td>Quantidade</td>
        <td>Preço Unitario</td>
        <td>Total</td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="product in products"
        :key="product.id"
      >
        <td>
          <img
            :src="product.photos[0] || 'https://via.placeholder.com/300x200?text=Not%20Photo'"
            :alt="product.name"
          >
        </td>

        <td v-text="product.name" />
        <td>Modelo 2</td>

        <td>
          <div class="d-inline-flex">
            <base-stepper
              :value="product.quantity"
              :max="product.inventory"
              @input="(newQty) => setProductQuantity({ product, qty: newQty })"
            />

            <button
              class="btn btn-danger btn-remove d-inline-flex justify-content-center ml-1"
              @click="removeFromCart(product)"
            >
              <fa :icon="['fas', 'times']" />
            </button>
          </div>
        </td>
        <td>R$ {{ product.price }}</td>
        <td>R$ {{ (product.price * product.quantity).toFixed(2) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions } from 'vuex';
import BaseStepper from '~/components/stepper/BaseStepper.vue';

export default {
  components: { BaseStepper },

  props: {
    products: { type: Array, required: true }
  },

  methods: {
    removeFromCart (product) {
      this.$store.dispatch('cart/removeProductFromCart', product);
    },

    ...mapActions({
      setProductQuantity: 'cart/setProductQuantity'
    })
  }
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/_table';
</style>
