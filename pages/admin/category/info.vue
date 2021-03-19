<template>
  <section class="page-content">
    <div class="card">
      <div class="row">
        <div class="col-md-6">
          <doughnut-chart
            :chart-data="categoriesData"
            :options="chartOptions"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'dashboard',
  transition: 'slide-up',

  data: () => ({
    categoriesData: {},
    chartOptions: {
      responsive: true,
    },
  }),

  async fetch () {
    const categoriesData = await this.$axios.$get('/category/info', {
      params: { grouped: 'products' },
    });

    this.categoriesData = {
      labels: categoriesData.map(item => item.name),
      datasets: [{
        data: categoriesData.map(item => item.productsCount),
      }],
    };
  },

  head: () => ({
    title: 'Genre info',
  }),
};
</script>
