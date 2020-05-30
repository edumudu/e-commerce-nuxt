<template>
  <section class="page-content">
    <div class="card">
      <table-responsive
        :data="data"
        @remove="handleRemove"
      />

      <paginate :total-pages="totalPages" />
    </div>
  </section>
</template>

<script>
import TableResponsive from '~/components/dashboard/TableResponsive.vue';
import Paginate from '~/components/Paginate.vue';
import listData from '~/mixins/admin/listData';

export default {
  layout: 'dashboard',

  components: {
    TableResponsive,
    Paginate
  },

  mixins: [listData],

  data: () => ({
    route: '/genre'
  })
};
</script>
