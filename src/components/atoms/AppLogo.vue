<template>
  <li class="logo-label">{{ value }}</li>
</template>
<script>
export default {
  props: ["value"]
};
</script>
<style scoped lang="scss">
.logo-label {
  font-size: 20px;
  font-weight: bold;
  width: 200px;
  vertical-align: center;
  color: #3373d3;
  border-right: 2px solid #ddd;
}
</style>