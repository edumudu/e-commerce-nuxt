<template>
  <section id="page-content">
    <div class="container">
      <h2 class="title">
        Carrinho
      </h2>

      <div class="row">
        <div class="col-sm-12 col-md-9">
          <div v-if="cartProducts.length">
            <Table :products="cartProducts" />

            <div class="d-flex justify-content-between">
              Total: <span>{{ cartTotal.toFixed(2) }}</span>
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
              <Collapse
                title="Use um codigo de cupom"
                input-placeholder="cupom"
                button-text="Aplicar"
              >
                Entre com o codigo do cupom
              </Collapse>

              <Collapse
                title="Verificar Frete"
                input-placeholder="CEP"
                button-text="Verificar"
              >
                Informe o CEP
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Table from '~/components/Table.vue';
import Collapse from '~/components/Collapse.vue';

export default {
  middleware: 'auth',

  components: {
    Table,
    Collapse
  },

  data: () => ({
    //
  }),

  computed: {
    ...mapGetters({
      cartProducts: 'cart/cartProducts',
      cartTotal: 'cart/cartTotal'
    })
  }
};
</script>
