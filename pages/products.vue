<template>
  <section id="page-content">
    <div class="container">
      <h2 class="title">
        Moda
      </h2>

      <section class="row">
        <aside class="sidebar col-sm-12 col-md-2">
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
                Cabeça
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

        <div class="col-sm-12 col-md-10">
          <overlay-loading v-show="$fetchState.pending" />

          <div class="row products-box">
            <product-vitrine
              class="col-12"
              :items="products"
            />
          </div>

          <data-paginate :total-pages="totalPages" />
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import ProductVitrine from '~/components/ProductVitrine.vue';
import DataPaginate from '~/components/DataPaginate.vue';
import OverlayLoading from '~/components/OverlayLoading.vue';

export default {
  transition: 'slide-left',

  components: {
    ProductVitrine,
    DataPaginate,
    OverlayLoading
  },

  async fetch () {
    this.response = await this.$axios.$get('/product', {
      params: this.$route.query
    });
  },

  data: () => ({
    response: {}
  }),

  computed: {
    totalPages () {
      return Math.ceil(this.response.total / this.response.per_page);
    },

    products () {
      return this.response.data || [];
    }
  },

  watch: {
    '$route.query': '$fetch'
  },

  head () {
    return {
      title: `Products | ${process.env.APP_NAME}`
    };
  }
};
</script>
