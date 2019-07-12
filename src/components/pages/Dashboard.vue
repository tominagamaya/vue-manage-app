<template>
  <div>
    <navbar></navbar>
    <sidebar></sidebar>
    <div class="top">
      <div>
        <value-card name="ユーザー数 合計" value="256"></value-card>
        <value-card name="プレビュー数 合計" value="21,234"></value-card>
      </div>
      <graph-card name="ユーザー数 推移" :data="getUserData" :label="getLabelList"></graph-card>
      <graph-card name="プレビュー数 推移" :data="getPreviewData" :label="getLabelList"></graph-card>
      <list-card name="データ一覧"></list-card>
    </div>
  </div>
</template>
<script>
import Navbar from "../organisms/Navbar";
import Sidebar from "../organisms/Sidebar";
import ValueCard from "../molecules/ValueCard";
import GraphCard from "../molecules/GraphCard";
import ListCard from "../molecules/ListCard";
export default {
  components: {
    Navbar,
    Sidebar,
    ValueCard,
    GraphCard,
    ListCard
  },
  data() {
    return {
      daysNum: 0
    };
  },
  created() {
    this.daysNum = this.getDays;
  },
  computed: {
    getDays() {
      const date = new Date();
      return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    },
    getUserData() {
      // TODO: fix getting from server data
      return [...Array(this.daysNum)].map(
        () => 300 + Math.floor(Math.random() * Math.floor(500 - 300))
      );
    },
    getLabelList() {
      const date = new Date();
      date.setDate(0);
      return [...Array(this.daysNum)].map(() => {
        date.setDate(date.getDate() + 1);
        return date.toLocaleDateString();
      });
    },
    getPreviewData() {
      // TODO: fix getting from server data
      return [...Array(this.daysNum)].map(
        () => 300 + Math.floor(Math.random() * Math.floor(500 - 300))
      );
    }
  }
};
</script>
<style scoped lang="scss">
.top {
  padding: 66px 0 0 200px;
}
</style>