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
          <img class="responsive-img" src="https://www.vestbrasil.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/b/l/blusa_mikaela_-_mk02-fem_2_.jpg">
        </td>

        <td v-text="product.name" />
        <td>Modelo 2</td>

        <td>
          <stepper
            v-model="product.quantity"
            :max="product.estoque"
          />

          <button class="btn-remove d-inline-flex justify-content-center alig-items-center">
            <fa :icon="['fas', 'times']" />
          </button>
        </td>
        <td>R$ {{ product.price }}</td>
        <td>R$ {{ (product.price * product.quantity).toFixed(2) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Stepper from '~/components/Stepper.vue';

export default {
  components: { Stepper },

  props: {
    products: { type: Array, required: true }
  }
};
</script>
