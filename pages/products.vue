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
          <div
            class="overlay-loading"
            :class="{ active: $fetchState.pending }"
          >
            <img src="/assets/svgs/load-1s-200px.svg">
          </div>

          <div class="row products-box">
            <product-vitrine :items="products" />
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

export default {
  transition: 'slide-left',

  components: {
    ProductVitrine,
    DataPaginate
  },

  async fetch () {
    const response = await this.$axios.$get(`/product?page=${this.$route.query.page || 1}`);

    this.products = response.data;
    this.totalPages = Math.ceil(response.total / response.per_page);
  },

  data: () => ({
    products: [],
    totalPages: 0
  }),

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
