<template>
  <ul class="side-menu">
    <li>
      <icon-dashboard height="20"></icon-dashboard>
      <a href="#">ダッシュボード</a>
    </li>
    <li>
      <icon-graph height="20"></icon-graph>
      <a href="#">推移グラフ</a>
    </li>
    <li>
      <icon-report height="20"></icon-report>
      <a href="#">結果レポート</a>
    </li>
    <li>
      <icon-setting height="20"></icon-setting>
      <a href="#">設定</a>
    </li>
    <li>
      <icon-help height="20"></icon-help>
      <a href="#">問い合わせ</a>
    </li>
  </ul>
</template>
<script>
import IconDashboard from "../atoms/IconDashboard";
import IconGraph from "../atoms/IconGraph";
import IconHelp from "../atoms/IconHelp";
import IconReport from "../atoms/IconReport";
import IconSetting from "../atoms/IconSetting";
export default {
  components: {
    IconDashboard,
    IconGraph,
    IconHelp,
    IconReport,
    IconSetting
  }
};
</script>
<style scoped lang="scss">
.side-menu {
  top: 74px;
  position: fixed;
  width: 200px;
  height: 100vmax;
  float: left;
  background-color: #3373d3;
  margin: 0;
  padding: 15px 0 0 0;
  user-select: none;

  & li a {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
  & li {
    padding: 25px 0 25px 30px;
    list-style: none;
  }
  & li:hover {
    background-color: #6ea3e9cb;
  }
}
</style>
