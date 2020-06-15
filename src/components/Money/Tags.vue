<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <div class="wrapper">
      <ul class="current">
        <li
          v-for="tag in dataSource"
          :key="tag.id"
          :class="{selected:selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)"
        >{{tag.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
// 导出一个选项
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Tags extends Vue {
  // 字符串数组,外部数据不能修改
  @Prop(Array) dataSource: string[] | undefined;
  selectedTags: string[] = [];
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit("update:value", this.selectedTags);
  }
  create() {
    const name = window.prompt("请输入新标签名");
    if (name === null) {
      return;
    } else if (name === "") {
      console.log(name);
      window.alert("标签名不为空");
    } else {
      console.log(name);
      if (this.dataSource)
        this.$emit("update:dataSource", [...this.dataSource, name]);
    }
  }
}
</script>
<style lang="scss" scoped>
.tags {
  padding: 16px;
  background: white;
  height: 20vh;
  font-size: 14px;
  display: flex;
  flex-grow: 1;
  flex-direction: column-reverse;
  > .wrapper {
    overflow-y: auto;
    > .current {
      display: block;
      display: flex;
      flex-wrap: wrap;
      margin-right: -16px;
      > li {
        $h: 24px;
        height: $h;
        border-radius: $h/2;
        line-height: $h;
        padding: 0 16px;
        margin-right: 12px;
        margin-bottom: 6px;
        background: #d9d9d9;
        &.selected {
          background: pink;
        }
      }
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid black;
      padding: 0 3px;
    }
  }
}
</style>