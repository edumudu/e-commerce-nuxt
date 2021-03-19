<template>
  <section class="page-content">
    <overlay-loading v-show="$fetchState.pending" />

    <div class="card">
      <table-responsive
        :data="data"
        @remove="handleRemove"
      />

      <data-paginate :total-pages="totalPages" />
    </div>
  </section>
</template>

<script>
import TableResponsive from '~/components/dashboard/TableResponsive.vue';
import DataPaginate from '~/components/DataPaginate.vue';
import listData from '~/mixins/admin/listData';
import OverlayLoading from '~/components/OverlayLoading.vue';

export default {
  components: {
    TableResponsive,
    DataPaginate,
    OverlayLoading,
  },

  mixins: [listData],
  layout: 'dashboard',
  transition: 'slide-up',

  data: () => ({
    route: '/genre',
  }),

  head () {
    return {
      title: `List genre | Dashboard ${process.env.APP_NAME}`,
    };
  },
};
</script>
