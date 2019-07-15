<template>
  <div>
    <navbar baseName="daily"></navbar>
    <sidebar></sidebar>
    <div class="top">
      <div>
        <value-card name="ユーザー数 合計" :value="userTotal"></value-card>
        <value-card name="プレビュー数 合計" :value="previewTotal"></value-card>
      </div>
      <graph-card name="ユーザー数 推移" :data="getUserData" :label="getLabelList"></graph-card>
      <graph-card name="プレビュー数 推移" :data="getPreviewData" :label="getLabelList"></graph-card>
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
      hourNum: 13,
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
      return [...Array(this.hourNum)].map(() =>
        Math.floor(Math.random() * Math.floor(50))
      );
    },
    getLabelList() {
      const date = new Date();
      date.setMonth(date.getMonth() - 12);
      return [...Array(this.hourNum)].map(() => {
        date.setMonth(date.getMonth() + 1);
        const month = date.getMonth() === 0 ? 12 : date.getMonth();
        return date.getFullYear() + "/" + month;
      });
    },
    getPreviewData() {
      // TODO: fix getting from server data
      return [...Array(this.hourNum)].map(() =>
        Math.floor(Math.random() * Math.floor(50))
      );
    },
    userTotal() {
      return this.userData.reduce((prev, current) => prev + current);
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