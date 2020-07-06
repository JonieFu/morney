<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <div class="wrapper">
      <ul class="current">
        <li
          v-for="tag in tagList"
          :key="tag.id"
          :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
          @click="toggle(tag)"
        >{{ tag.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
// 导出一个选项
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Tags extends Vue {
  // data
  selectedTags: string[] = [];
  // computed
  get tagList() {
    return this.$store.state.tagList;
  }
  // hooks
  created() {
    this.$store.commit("fetchTag");
  }
  // methods
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
    const name = window.prompt("请输入两个字的新标签名");
    if (name === "") {
      window.alert("标签名不为空");
    } else if (name === null) {
      return;
    } else {
      this.$store.commit("createTag", name);
      window.alert("新建标签成功");
    }
  }
}
</script>
<style lang="scss" scoped>
.tags {
  background: #fff;
  padding: 16px;
  padding-left: 22px;
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
  > .wrapper {
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    overflow: auto;

    height: 0;
    &::-webkit-scrollbar {
      display: none;
    }
    > .current {
      display: flex;
      flex-wrap: wrap;
      > li {
        display: inline-block;
        margin-left: 8px;
        margin-right: 8px;
        $h: 24px;
        height: $h;
        border-radius: $h/2;
        line-height: $h;
        padding: 0 16px;
        margin-bottom: 20px;
        background: #f5f5f5;
        &.selected {
          background: #f6e69d;
        }
      }
    }
  }
  > .new {
    margin-top: 5px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid black;
      margin-left: 5px;
      padding: 0 3px;
    }
  }
}
</style>

