<template>
  <validation-observer v-slot="{ handleSubmit }">
    <form
      class="d-flex"
      @submit.prevent="handleSubmit(onSubmit)"
    >
      <validation-provider
        class="flex-fill"
        rules="required"
      >
        <input
          v-model="search"
          class="form-field"
          type="text"
          name="search_value"
          placeholder="Procure por uma categoria ou um produto :)"
          required
        >

        <fa :icon="['fas', 'search']" class="help-icon" />
      </validation-provider>

      <button class="btn" type="submit" name="search">
        Buscar
      </button>
    </form>
  </validation-observer>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },

  data: () => ({
    search: ''
  }),

  methods: {
    onSubmit () {
      this.$router.push({ path: '/products', query: { search: this.search } });
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/page-components/the-navbar-search';
</style>
