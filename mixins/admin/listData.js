export default {
  async fetch () {
    const response = await this.$axios.$get(`${this.route}?page=${this.$route.query.page || 1}`);

    this.data = response.data;
    this.totalPages = Math.ceil(response.total / response.per_page);
  },

  data: () => ({
    data: [],
    totalPages: 0
  }),

  watch: {
    '$route.query': '$fetch'
  },

  methods: {
    async handleRemove (item) {
      this.$nuxt.$loading.start();

      try {
        await this.$axios.$delete(`${this.route}/${item.slug}`);

        this.data = this.data.filter(genre => genre.id !== item.id);
      } catch (e) {

      }

      this.$nuxt.$loading.finish();
    }
  }
};
