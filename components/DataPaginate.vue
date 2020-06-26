<template>
  <ul v-show="totalPages > 1" class="paginate">
    <li :class="{ disabled: currentPage == 1 }">
      <nuxt-link :to="makePath(currentPage - 1)">
        <fa :icon="['fas', 'angle-left']" />
      </nuxt-link>
    </li>

    <li
      v-for="(page, index) in totalPages || 0"
      :key="index"
      :class="{ active: page == currentPage}"
    >
      <nuxt-link :to="makePath(page)">
        {{ page }}
      </nuxt-link>
    </li>

    <li :class="{ disabled: currentPage == totalPages }">
      <nuxt-link :to="makePath(currentPage + 1)">
        <fa :icon="['fas', 'angle-right']" />
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    totalPages: { type: Number, required: true }
  },

  computed: {
    currentPage () {
      return +this.$route.query.page || 1;
    }
  },

  methods: {
    makePath (page) {
      return {
        path: this.$route.path,
        query: { ...this.$route.query, page }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/_paginate';
</style>
