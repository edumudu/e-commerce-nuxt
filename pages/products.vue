<template>
  <section id="page-content">
    <div class="container">
      <h2 class="title">
        Moda
      </h2>

      <section class="row">
        <aside class="sidebar col-sm-12 col-md-3">
          <ul class="treeview">
            <li class="treeview-item">
              <a href="<?= MAIN_PATH . 'products?category=blusa'; ?>">
                Blusa
              </a>
            </li>

            <li class="treeview-item">
              <a href="<?= MAIN_PATH . 'products?category=blusa'; ?>">
                Vestido
              </a>
            </li>

            <li class="treeview-item">
              <a href="<?= MAIN_PATH . 'products?category=blusa'; ?>">
                Acessorios para a cabeça
              </a>

              <ul class="treeview">
                <li class="treeview-item">
                  gorro
                </li>

                <li class="treeview-item">
                  chap
                </li>
              </ul>
            </li>
          </ul>
        </aside>

        <div class="col-sm-12 col-md-9">
          <div class="row products-box">
            <vitrine :items="products" />
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import Vitrine from '~/components/Vitrine.vue';

export default {
  components: {
    Vitrine
  },

  data: () => ({
    products: []
  }),

  async mounted () {
    this.products = await this.$axios.$get('/product');
  }
};
</script>
