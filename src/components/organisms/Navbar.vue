<template>
  <nav class="nav-header">
    <ul class="nav-header__menu">
      <app-logo value="Web Analysis"></app-logo>
      <li class="current"><a href="#">ホーム</a></li>
      <li><a href="#">月毎</a></li>
      <li><a href="#">日毎</a></li>
      <login-link value="admin"></login-link>
    </ul>
  </nav>  
</template>
<script>
import AppLogo from "../atoms/AppLogo";
import LoginLink from "../atoms/LoginLink";
export default {
  components: {
    AppLogo,
    LoginLink
  }
};
</script>
<style scoped lang="scss">
.nav-header {
  text-align: center;
  height: 67px;
  background-color: white;
  position: fixed;
  width: 100%;
}
.nav-header__menu {
  padding: 20px 0;
  margin: 0;
  text-align: left;

  & li {
    list-style: none;
    display: inline-block;
    width: 200px;
    min-width: 90px;
    text-align: center;
  }
  & li a {
    text-decoration: none;
    color: #333;
  }
  & li.current a {
    color: #3280f5;
  }
  & li a:hover {
    color: #b1b6be;
  }
}
</style>