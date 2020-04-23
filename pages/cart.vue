<template>
  <section id="page-content">
    <div class="container">
      <h2 class="title">
        Carrinho
      </h2>

      <div class="row">
        <div class="col-sm-12 col-md-9">
          <Table :products="products" />
        </div>

        <div class="col-sm-12 col-md-3">
          <div class="cart-options">
            <h2 class="soft-title">
              Oque você quer
            </h2>
            <div class="options-contain">
              <div class="collapse">
                <h3>Use um codigo de cupom</h3>
                <div class="collapsable">
                  <p>Entrte com o codigo do cupom</p>
                  <div class="flex">
                    <input class="form-field" type="text" name="cupom" placeholder="Insira o cupom">
                    <button class="btn">
                      Aplicar
                    </button>
                  </div>
                </div>
              </div>

              <div class="collapse">
                <h3>Verificar Frete</h3>
                <div class="collapsable">
                  <p>Informe o CEP</p>
                  <div class="flex">
                    <input class="form-field" type="text" name="CEP" placeholder="Insira o CEP">
                    <button class="btn">
                      Verificar
                    </button>
                  </div>
                </div>
              </div>
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

export default {
  middleware: 'auth',

  components: { Table },

  data: () => ({
    products: []
  }),

  async mounted () {
    for (const cartItem of this.cartItems()) {
      const product = await this.$axios.$get(`/product/${cartItem.id}`);
      this.products.push({ ...product, quantity: cartItem.quantity });
    }
  },

  methods: {
    ...mapGetters({
      cartItems: 'cart/cartItems'
    })
  }
};
</script>
