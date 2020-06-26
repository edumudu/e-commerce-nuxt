<template>
  <section class="page-content">
    <div class="card">
      <table-responsive
        :data="data"
        :need-actions="false"
        :hidden="['slug', 'created_at', 'updated_at', 'items']"
      />

      <data-paginate :total-pages="totalPages" />
    </div>
  </section>
</template>

<script>
import TableResponsive from '~/components/dashboard/TableResponsive.vue';
import DataPaginate from '~/components/DataPaginate.vue';
import listData from '~/mixins/admin/listData';

export default {
  layout: 'dashboard',
  transition: 'slide-up',

  components: {
    TableResponsive,
    DataPaginate
  },

  mixins: [listData],

  data: () => ({
    route: '/order'
  }),

  head () {
    return {
      title: `List orders | Dashboard ${process.env.APP_NAME}`
    };
  }
};
</script>
