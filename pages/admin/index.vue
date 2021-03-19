<template>
  <section class="page-content">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-3 mb-sm-2">
        <div class="card hot-info orders">
          <h1 class="hot-info-information">
            {{ newsOrders }}
          </h1>

          <h5 class="hot-info-title">
            New orders
          </h5>

          <div class="hot-info-icon">
            <fa :icon="['fas', 'shopping-cart']" />
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3 mb-sm-2">
        <div class="card hot-info users">
          <h1 class="hot-info-information">
            {{ newUsers }}
          </h1>

          <h5 class="hot-info-title">
            New users
          </h5>

          <div class="hot-info-icon">
            <fa :icon="['fas', 'users']" />
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3 mb-sm-2">
        <div class="card hot-info orders">
          <h1 class="hot-info-information">
            {{ totalOrders }}
          </h1>

          <h5 class="hot-info-title">
            Total orders
          </h5>

          <div class="hot-info-icon">
            <fa :icon="['fas', 'shopping-cart']" />
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3 mb-sm-2">
        <div class="card hot-info users">
          <h1 class="hot-info-information">
            {{ totalUsers }}
          </h1>

          <h5 class="hot-info-title">
            Total users
          </h5>

          <div class="hot-info-icon">
            <fa :icon="['fas', 'users']" />
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col-12 col-md-6">
        <div class="card">
          <line-chart
            :chart-data="usersXOrdersProjection"
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
    usersXOrdersProjection: {},
    newUsers: 0,
    newsOrders: 0,
    totalUsers: 0,
    totalOrders: 0,
    chartOptions: {
      responsive: true,
      scales: {
        yAxes: [{
          ticks: {
            suggestedMax: 50,
            stepSize: 5,
          },
        }],
      },
    },
  }),

  async fetch () {
    const [newsUsers, newsOrders, totalUsers, totalOrders] = await Promise.all([
      this.$axios.$get('/user', {
        params: { createdInTime: 1 },
      }),
      this.$axios.$get('/order', {
        params: { createdInTime: 1 },
      }),
      this.$axios.$get('/user'),
      this.$axios.$get('/order'),
    ]);

    const [usersProjection, ordersProjection] = await Promise.all([
      this.$axios.$get('/user/info', {
        params: { projection: 5 },
      }),
      this.$axios.$get('/order/info', {
        params: { projection: 5 },
      }),
    ]);

    this.usersXOrdersProjection = {
      labels: [...new Set([
        ...usersProjection.map(item => item.month),
        ...ordersProjection.map(item => item.month),
      ])],
      datasets: [
        {
          label: 'News Users',
          data: usersProjection.map(item => item.quantity),
          fill: false,
        },
        {
          label: 'News Orders',
          data: ordersProjection.map(item => item.quantity),
          fill: false,
        },
      ],
    };

    this.newUsers = newsUsers.total;
    this.newsOrders = newsOrders.total;
    this.totalUsers = totalUsers.total;
    this.totalOrders = totalOrders.total;
  },

  head: () => ({
    title: 'Home',
  }),
};
</script>
