<template>
  <ul class="paginate">
    <li :class="{ disabled: currentPage == 1 }">
      <nuxt-link :to="`/products?page=${currentPage - 1}`">
        <fa :icon="['fas', 'angle-left']" />
      </nuxt-link>
    </li>

    <li
      v-for="(page, index) in totalPages"
      :key="index"
      :class="{ active: page == currentPage}"
    >
      <nuxt-link :to="`/products?page=${page}`">
        {{ page }}
      </nuxt-link>
    </li>

    <li :class="{ disabled: currentPage == totalPages }">
      <nuxt-link :to="`/products?page=${currentPage + 1}`">
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
  }
};
</script>
