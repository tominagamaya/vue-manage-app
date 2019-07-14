<template>
  <div>
    <navbar baseName="home"></navbar>
    <sidebar></sidebar>
    <div class="top">
      <div>
        <select-month @date="setMonthData"></select-month>
        <value-card name="ユーザー数 合計" value="256"></value-card>
        <value-card name="プレビュー数 合計" value="21,234"></value-card>
      </div>
      <graph-card name="ユーザー数 推移" :data="userData" :label="labelData" :min="200" :max="600"></graph-card>
      <graph-card name="プレビュー数 推移" :data="previewData" :label="labelData"  :min="200" :max="600"></graph-card>
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
import SelectMonth from "../molecules/SelectMonth";
export default {
  components: {
    Navbar,
    Sidebar,
    ValueCard,
    GraphCard,
    ListCard,
    SelectMonth
  },
  data() {
    return {
      daysNum: 0,
      userData: [],
      previewData: [],
      labelData: []
    };
  },
  created() {
    this.setMonthData(new Date());
  },
  computed: {
    getUserData() {
      // TODO: fix getting from server data
      return [...Array(this.daysNum)].map(
        () => 300 + Math.floor(Math.random() * Math.floor(500 - 300))
      );
    },
    getPreviewData() {
      // TODO: fix getting from server data
      return [...Array(this.daysNum)].map(
        () => 300 + Math.floor(Math.random() * Math.floor(500 - 300))
      );
    }
  },
  methods: {
    getDays(date) {
      return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    },
    getLabelList(date) {
      date.setDate(0);
      return [...Array(this.daysNum)].map(() => {
        date.setDate(date.getDate() + 1);
        return date.toLocaleDateString();
      });
    },
    setMonthData(date) {
      this.daysNum = this.getDays(date);
      this.userData = this.getUserData;
      this.previewData = this.getPreviewData;
      this.labelData = this.getLabelList(date);
    }
  }
};
</script>
<style scoped lang="scss">
.top {
  padding: 66px 0 0 200px;
}
</style>