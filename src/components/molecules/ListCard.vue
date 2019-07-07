<template>
  <div class="list">
    <card-title :value="name"></card-title>
    <div class="list-table">
      <table>
        <tr>
          <th>日時</th>
          <th>タイトル名</th>
          <th>URL</th>
          <th>滞在時間</th>
        </tr>
        <tr>
          <td>2019-07-01</td>
          <td>mogumogu blog</td>
          <td>/mogumogu/home</td>
          <td>3:20</td>
        </tr>
        <tr>
          <td>2019-07-02</td>
          <td>mogumogu blog</td>
          <td>/mogumogu/home</td>
          <td>5:12</td>
        </tr>
        <tr>
          <td>2019-07-03</td>
          <td>mogumogu blog</td>
          <td>/mogumogu/home</td>
          <td>1:01</td>
        </tr>
      </table>
    </div>
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
.list {
  display: inline-block;
  margin: 0 0 40px 40px;
  min-height: 100px;
  width: 770px;
  background-color: white;
  border: 0 solid #aaa;
  border-radius: 4px;
  box-shadow: 2px 2px 2px 2px #ccc;
  padding: 15px;
}
.list-table {
  padding: 10px 0;
  & table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }
  & table tr {
    border-bottom: solid 1px #eee;
    cursor: pointer;
  }
  & table tr:hover {
    background-color: #d4f0fd;
  }
  & table th,
  & table td {
    text-align: center;
    width: 25%;
    padding: 13px 0;
  }
}
</style>