<template>
  <section id="page-content">
    <div class="container">
      <h2 class="title">
        Carrinho
      </h2>

      <div class="row">
        <div class="col-sm-12 col-md-9">
          <div v-if="cartProducts.length">
            <cart-table :products="cartProducts" />

            <div class="d-flex justify-content-between">
              Total: <span>{{ cartTotal.toFixed(2) }}</span>
            </div>

            <div class="d-flex mt-3">
              <nuxt-link
                to="/checkout"
                class="btn-press btn-success ml-auto"
              >
                Checkout
              </nuxt-link>
            </div>
          </div>

          <div v-else>
            No have products in cart yet
          </div>
        </div>

        <div class="col-sm-12 col-md-3">
          <div class="cart-options">
            <h2 class="soft-title">
              Oque você quer
            </h2>

            <div class="options-contain">
              <input-collapse
                title="Use um codigo de cupom"
                input-placeholder="cupom"
                button-text="Aplicar"
              >
                Entre com o codigo do cupom
              </input-collapse>

              <input-collapse
                title="Verificar Frete"
                input-placeholder="CEP"
                button-text="Verificar"
              >
                Informe o CEP
              </input-collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import CartTable from '~/components/CartTable.vue';
import InputCollapse from '~/components/InputCollapse.vue';

export default {
  components: {
    CartTable,
    InputCollapse,
  },

  middleware: 'auth',
  transition: 'slide-left',

  head: () => ({
    title: 'My cart',
  }),

  computed: {
    ...mapGetters({
      cartProducts: 'cart/cartProducts',
      cartTotal: 'cart/cartTotal',
    }),
  },
};
</script>
