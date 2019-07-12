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
        <tr v-for="value in this.dataList" :key="value.id">
          <td>{{ value.date }}</td>
          <td>{{ value.title }}</td>
          <td>{{ value.url }}</td>
          <td>{{ value.time }}</td>
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
  },
  created() {
    // TODO: get data from server
    this.dataList = [
      {
        id: 1,
        date: "2019-07-01",
        title: "mogumogu blog",
        url: "/mogumogu/home",
        time: "1:20"
      },
      {
        id: 2,
        date: "2019-07-02",
        title: "mogumogu blog",
        url: "/mogumogu/home",
        time: "2:21"
      },
      {
        id: 3,
        date: "2019-07-03",
        title: "mogumogu blog",
        url: "/mogumogu/home",
        time: "3:23"
      },
      {
        id: 4,
        date: "2019-07-04",
        title: "mogumogu blog",
        url: "/mogumogu/home",
        time: "4:01"
      },
      {
        id: 5,
        date: "2019-07-05",
        title: "mogumogu blog",
        url: "/mogumogu/home",
        time: "5:02"
      },
      {
        id: 6,
        date: "2019-07-06",
        title: "mogumogu blog",
        url: "/mogumogu/home",
        time: "6:03"
      },
      {
        id: 7,
        date: "2019-07-07",
        title: "mogumogu blog",
        url: "/mogumogu/home",
        time: "7:01"
      },
      {
        id: 8,
        date: "2019-07-08",
        title: "mogumogu blog",
        url: "/mogumogu/home",
        time: "0:20"
      },
      {
        id: 9,
        date: "2019-07-09",
        title: "mogumogu blog",
        url: "/mogumogu/home",
        time: "1:01"
      },
      {
        id: 10,
        date: "2019-07-10",
        title: "mogumogu blog",
        url: "/mogumogu/home",
        time: "2:20"
      }
    ];
  },
  data() {
    return {
      dataList: []
    };
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