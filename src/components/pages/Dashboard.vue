<template>
  <div>
    <navbar></navbar>
    <sidebar></sidebar>
    <div class="top">
      <div>
        <value-card name="ユーザー数 合計" value="256"></value-card>
        <value-card name="プレビュー数 合計" value="21,234"></value-card>
      </div>
      <graph-card name="ユーザー数 推移"></graph-card>
      <graph-card name="プレビュー数 推移"></graph-card>
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
  }
};
</script>
<style scoped lang="scss">
.top {
  padding: 66px 0 0 200px;
}
</style>