import Vue from 'vue';
import { Line, Doughnut, mixins } from 'vue-chartjs';
import 'chartjs-plugin-colorschemes';

const props = {
  options: { type: Object, default: null },
};

function mounted () {
  this.renderChart(this.chartData, { ...this.options });
};

Vue.component('line-chart', {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props,

  mounted,
});

Vue.component('doughnut-chart', {
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
  props,

  mounted,
});
