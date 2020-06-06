import Icon from '@/components/icon.vue';
<template>
  <nav>
    <router-link to="/money" class="item">
      <Icon name="money" />记账
    </router-link>
    <router-link to="/lables" class="item">
      <Icon name="Lable" />标签
    </router-link>
    <router-link to="/statistics" class="item">
      <Icon name="statistics" />统计
    </router-link>
  </nav>
</template
>s

<script>
export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: row;
  font-size: 12px;
  > .item {
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
