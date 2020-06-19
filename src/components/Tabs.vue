<template>
  <div class="tabs">
    <li
      :class="liClass(item)"
      v-for="item in dataSource"
      :key="item.value"
      @click="select(item)"
    >{{item.text}}</li>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

type DataSourceItem = {
  text: string;
  value: string;
};
@Component
export default class Tabs extends Vue {
  @Prop(String) value!: string;
  @Prop(String) classPrefix?: string;
  @Prop({ required: true, type: Array }) dataSource!: DataSourceItem[];

  liClass(item: DataSourceItem) {
    return {
      selected: item.value === this.value,
      [this.classPrefix + "-item"]: this.classPrefix
    };
  }
  select(item: DataSourceItem) {
    this.$emit("update:value", item.value);
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  background: #c4c4c4;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  font-size: 24px;
  > li {
    width: 50%;
    line-height: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333333;
    }
  }
}
</style>