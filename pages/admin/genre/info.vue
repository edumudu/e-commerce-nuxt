<template>
  <section class="page-content">
    <div class="card">
      <div class="row">
        <div class="col-md-6">
          <doughnut-chart
            :chart-data="genresData"
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
    genresData: {},
    chartOptions: {
      responsive: true,
    },
  }),

  async fetch () {
    const genresData = await this.$axios.$get('/genre/info', {
      params: { grouped: 'products' },
    });

    this.genresData = {
      labels: genresData.map(item => item.name),
      datasets: [{
        data: genresData.map(item => item.productsCount),
      }],
    };
  },

  head () {
    return {
      title: `Genre info | Dasboard ${process.env.APP_NAME}`,
    };
  },
};
</script>
