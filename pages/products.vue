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
            :class="{ active }"
          >
            <img src="/assets/svgs/load-1s-200px.svg">
          </div>

          <div class="row products-box">
            <vitrine :items="products" />
          </div>

          <paginate :total-pages="totalPages" />
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import Vitrine from '~/components/Vitrine.vue';
import Paginate from '~/components/Paginate.vue';

export default {
  components: {
    Vitrine,
    Paginate
  },

  data: () => ({
    products: [],
    active: true,
    totalPages: 0
  }),

  computed: {
    currentPage () {
      return +this.$route.query.page || 1;
    }
  },

  watch: {
    currentPage (newValue) {
      this.fetchProducts();
    }
  },

  mounted () {
    this.fetchProducts();
  },

  methods: {
    async fetchProducts () {
      this.active = true;
      this.products = [];
      const response = await this.$axios.$get(`/product?page=${this.currentPage}`);
      this.products = response.data;
      this.totalPages = Math.ceil(response.total / response.per_page);
      this.active = false;
    }
  }
};
</script>
