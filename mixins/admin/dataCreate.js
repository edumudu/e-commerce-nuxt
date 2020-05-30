export default {
  data: () => ({
    data: {
      name: ''
    },
    failMessage: '',
    sending: false
  }),

  methods: {
    async onSubmit () {
      this.$nuxt.$loading.start();
      this.sending = true;

      try {
        await this.$axios.$post(this.route, this.data);
        this.data = {};
        this.failMessage = '';

        this.$nextTick(() => {
          this.$refs.form.reset();
        });
      } catch (e) {
        this.failMessage = 'Something went wrong, try again later';
      }

      this.$nuxt.$loading.finish();
      this.sending = false;
    }
  }
};
