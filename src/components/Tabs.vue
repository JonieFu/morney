<template>
  <div class="tabs">
    <li
      class="tabs-item"
      :class="liClass(item)"
      v-for="item in dataSource"
      :key="item.value"
      @click="select(item)"
    >{{ item.text }}</li>
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
  background: #f3f3f3;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  &-item {
    width: 50%;
    line-height: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected {
      background: white;
      color: #f19b37;
    }
  }
}
</style>
