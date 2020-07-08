import OverlayLoading from '~/components/OverlayLoading.vue';

export default {
  components: {
    OverlayLoading,
  },

  async fetch () {
    try {
      this.data = await this.$axios.$get(`${this.route}/${this.$route.params.slug}`);
    } catch (e) {
      if (!process.server) {
        switch (e.response.status) {
          case 404:
            this.$toast.error('Not found');
            this.$router.push(`/admin${this.route}`);
            break;
          default:
            this.$toast.error('Something went wrong, try again later');
        }
      } else {
        this.$nuxt.context.redirect(`/admin${this.route}`);
      }
    }
  },

  data: () => ({
    sending: false,
    data: {},
  }),

  methods: {
    async onSubmit () {
      this.sending = true;
      this.$nuxt.$loading.start();

      try {
        await this.$axios.$put(`${this.route}/${this.data.slug}`, this.data);
        this.$router.push(`/admin${this.route}`);
      } catch (e) {

      }

      this.$nuxt.$loading.finish();
      this.sending = false;
    },
  },
};
