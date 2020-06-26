<template>
  <section class="page-content">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-3 mb-sm-2">
        <div class="card hot-info orders">
          <h1 class="hot-info-information">
            2142
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
            2142
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
            2142
          </h1>

          <h5 class="hot-info-title">
            New users
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
          <line-chart :chart-data="newsUsersProjection" :options="{ responsive: true }" />
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="card">
          <doughnut-chart :chart-data="dataCollection" :options="{ responsive: true }" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'dashboard',
  transition: 'slide-up',

  async fetch () {
    const newsUsers = await this.$axios.$get('/user', {
      params: { createdInTime: 1 }
    });

    const usersProjection = await this.$axios.$get('/user/info', {
      params: { projection: 3 }
    });

    this.newsUsersProjection = {
      labels: usersProjection.map(item => item.month),
      datasets: [
        {
          label: 'Data One',
          borderColor: '#f87979',
          backgroundColor: '#f87979',
          data: usersProjection.map(item => item.quantity),
          fill: false
        }
      ]
    };

    this.newUsers = newsUsers.total;
  },

  data: () => ({
    newsUsersProjection: {},
    dataCollection: {},
    newUsers: 0
  }),

  head () {
    return {
      title: `Home | Dashboard ${process.env.APP_NAME}`
    };
  }
};
</script>
