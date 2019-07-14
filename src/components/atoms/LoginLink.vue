<template>
  <li class="login">
    <input id="login-check1" class="login__check" type="checkbox">
    <label class="login__label" for="login-check1">{{ value }}</label>
    <div class="login__content">
      <div class="login__menu">
        <a class="login__link" href="#">ログアウト</a>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  props: ["value"]
};
</script>
<style scoped lang="scss">
.login {
  width: 200px;
  position: absolute;
  right: 0;
  border-left: 2px solid #ddd;
  height: 27px;
  user-select: none;

  &__content {
    box-shadow: 0 5px 3px -3px #ddd;
    background-color: white;
    height: 0;
    opacity: 0;
    padding: 0 12px;
    transition: 0.5s;
    visibility: hidden;
    border-radius: 4px;
  }
  &__menu {
    padding: 10px;
    transition: 0.8s;
  }
  &__link {
    color: #333;
    text-decoration: none;
  }
  &__check {
    display: none;
  }
  &__label {
    width: 200px;
    display: inline-block;
    cursor: pointer;
  }
  &__check:checked + &__label + &__content {
    height: 40px;
    opacity: 1;
    padding: 10px;
    visibility: visible;
  }
}
</style>