<template>
  <div class="nav">
    <router-link to="/money">记账</router-link>|
    <router-link to="/lables">标签</router-link>|
    <router-link to="/statistics">统计</router-link>
  </div>
</template>

<script>
import x from "@/assets/icons/Lable.svg";
console.log(x);
export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid red;
}
</style>
