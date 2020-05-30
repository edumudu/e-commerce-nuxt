import Vue from 'vue';
import { Line, Doughnut, mixins } from 'vue-chartjs';

function mounted () {
  this.renderChart(this.chartData, { ...this.options });
};

Vue.component('line-chart', {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['options'],

  mounted
});

Vue.component('doughnut-chart', {
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
  props: ['options'],

  mounted
});
