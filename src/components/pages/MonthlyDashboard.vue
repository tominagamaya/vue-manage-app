<template>
  <div>
    <navbar baseName="monthly"></navbar>
    <sidebar></sidebar>
    <div class="top">
      <div>
        <value-card name="ユーザー数 合計" :value="userTotal"></value-card>
        <value-card name="プレビュー数 合計" :value="previewTotal"></value-card>
      </div>
      <graph-card name="ユーザー数 推移" :data="userData" :label="getLabelList" :min="200" :max="600"></graph-card>
      <graph-card name="プレビュー数 推移" :data="previewData" :label="getLabelList"  :min="200" :max="600"></graph-card>
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
      monthNum: 13,
      userData: [],
      previewData: []
    };
  },
  created() {
    this.userData = this.getUserData;
    this.previewData = this.getPreviewData;
  },
  computed: {
    getUserData() {
      // TODO: fix getting from server data
      return [...Array(this.monthNum)].map(
        () => 300 + Math.floor(Math.random() * Math.floor(500 - 300))
      );
    },
    userTotal() {
      return this.userData.reduce((prev, current) => prev + current);
    },
    getLabelList() {
      const date = new Date();
      date.setMonth(date.getMonth() - 12);
      return [...Array(this.monthNum)].map(() => {
        date.setMonth(date.getMonth() + 1);
        const month = date.getMonth() === 0 ? 12 : date.getMonth();
        return date.getFullYear() + "/" + month;
      });
    },
    getPreviewData() {
      // TODO: fix getting from server data
      return [...Array(this.monthNum)].map(
        () => 300 + Math.floor(Math.random() * Math.floor(500 - 300))
      );
    },
    previewTotal() {
      return this.previewData.reduce((prev, current) => prev + current);
    }
  }
};
</script>
<style scoped lang="scss">
.top {
  padding: 66px 0 0 200px;
}
</style>