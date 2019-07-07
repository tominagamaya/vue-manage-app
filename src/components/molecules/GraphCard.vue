<template>
  <div class="graph">
    <card-title :value="name"></card-title>
    <ul class="chart">
      <li class="chart__axis">
        <span class="chart__value" style="height:5%" title="2019/7/1"></span>
      </li>
      <li class="chart__axis">
        <span class="chart__value" style="height:70%" title="2019/7/2"></span>
      </li>
      <li class="chart__axis">
        <span class="chart__value" style="height:50%" title="2019/7/3"></span>
      </li>
      <li class="chart__axis">
        <span class="chart__value" style="height:50%" title="2019/7/4"></span>
      </li>
      <li class="chart__axis">
        <span class="chart__value" style="height:50%" title="2019/7/5"></span>
      </li>
    </ul>
  </div>
</template>
<script>
import CardTitle from "../atoms/CardTitle";
export default {
  components: {
    CardTitle
  },
  props: {
    name: String,
    values: Array
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
  display: table;
  table-layout: fixed;
  width: 100%;
  max-width: 680px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 2%, transparent 2%);
  background-size: 100% 50px;
  background-position: left top;

  &__axis {
    position: relative;
    display: table-cell;
    vertical-align: bottom;
    height: 200px;
  }
  &__value {
    margin: 0 1em;
    display: block;
    background: rgba(#d1ecfa, 0.75);
    animation: draw 1s ease-in-out;

    &:before {
      position: absolute;
      left: 0;
      right: 0;
      top: 100%;
      padding: 5px 1em 0;
      display: block;
      text-align: center;
      content: attr(title);
      word-wrap: break-word;
    }
  }
}
@keyframes draw {
  0% {
    height: 0;
  }
}
</style>