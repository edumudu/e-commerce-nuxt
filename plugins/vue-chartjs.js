/* eslint-disable vue/one-component-per-file */
import Vue from 'vue';
import { Line, Doughnut, mixins } from 'vue-chartjs';
import 'chartjs-plugin-colorschemes';

const props = {
  options: { type: Object, default: null },
};

function mounted () {
  this.renderChart(this.chartData, { ...this.options });
};

Vue.component('LineChart', {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props,

  mounted,
});

Vue.component('DoughnutChart', {
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
  props,

  mounted,
});
