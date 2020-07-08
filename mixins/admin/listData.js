export default {
  async fetch () {
    this.response = await this.$axios.$get(`${this.route}`, {
      params: this.$route.query,
    });
  },

  data: () => ({
    response: {},
  }),

  computed: {
    totalPages () {
      return Math.ceil(this.response.total / this.response.per_page);
    },

    data: {
      get () {
        return this.response.data || [];
      },

      set (data) {
        this.response.data = data;
      },
    },
  },

  watch: {
    '$route.query': '$fetch',
  },

  methods: {
    async handleRemove (item) {
      this.$nuxt.$loading.start();

      try {
        const { message } = await this.$axios.$delete(`${this.route}/${item.slug}`);

        this.data = this.data.filter(genre => genre.id !== item.id);
        this.$toast.success(message);
      } catch (e) {
        const data = e?.response?.data;
        this.$toast.error(data?.message || data?.error?.message || 'Something went wrong, try again later');
      }

      this.$nuxt.$loading.finish();
    },
  },
};
