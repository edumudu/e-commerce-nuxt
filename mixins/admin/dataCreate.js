export default {
  data: () => ({
    data: {
      name: ''
    },
    sending: false
  }),

  methods: {
    async onSubmit () {
      this.$nuxt.$loading.start();
      this.sending = true;

      try {
        await this.$axios.$post(this.route, this.data);

        this.$toast.success(`Successful created! ${this.data.name}`);
        this.data = {};

        this.$nextTick(() => {
          this.$refs.form.reset();
        });
      } catch (e) {
        this.$toast.error(e.response.data.message);
      }

      this.$nuxt.$loading.finish();
      this.sending = false;
    }
  }
};
