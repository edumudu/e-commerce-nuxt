export default {
  computed: {
    phoneMask () {
      return value => value.length <= 14 ? '(##) ####-####?#' : '(##) #####-####';
    },
  },
};
