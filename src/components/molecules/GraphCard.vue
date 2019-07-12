<template>
  <div class="graph">
    <card-title :value="name"></card-title>
    <line-chart class="chart" :data="getChartData()" :options="getOptions()" :height="270" :width="770"></line-chart>
  </div>
</template>
<script>
import CardTitle from "../atoms/CardTitle";
import LineChart from "../atoms/LineChart";
export default {
  components: {
    CardTitle,
    LineChart
  },
  props: {
    name: String,
    data: Array,
    label: Array
  },
  data() {
    return {
      graphData: null
    };
  },
  methods: {
    getChartData() {
      return {
        labels: this.label,
        datasets: [
          {
            data: this.data,
            borderColor: "#3280f57e",
            backgroundColor: "#3280f528",
            animation: false
          }
        ]
      };
    },
    getOptions() {
      // TODO: fix min and max value
      return {
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                min: 200,
                max: 600,
                stepSize: 100
              }
            }
          ]
        }
      };
    }
  }
};
</script>
<style scoped lang="scss">
.graph {
  display: inline-block;
  margin: 0 0 40px 40px;
  height: 300px;
  width: 770px;
  background-color: white;
  border: 0 solid #aaa;
  border-radius: 4px;
  box-shadow: 2px 2px 2px 2px #ccc;
  padding: 15px;
}
.chart {
  padding-top: 15px;
}
</style>