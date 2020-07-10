export default {
  activated () {
    if (this.$fetchState.timestamp <= (Date.now() - 30000)) {
      this.$fetch();
    }
  },
};
