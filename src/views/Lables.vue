<template>
  <div>
    <Layout>
      <ol class="tags">
        <li v-for="tag in tags" :key="tag.id">
          <span>{{tag.name}}</span>
          <Icon name="right" />
        </li>
      </ol>
      <div class="createTag-wrapper">
        <button class="createTag" @click="createTag">新增标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { Component } from "vue-property-decorator";
import tagListModel from "../models/tagListModel";
tagListModel.fetch();
@Component
export default class Lables extends Vue {
  tags = tagListModel.data;
  createTag() {
    const name = window.prompt("输入新增标签名")!;
    if (name) {
      const message = tagListModel.create(name);
      if (message === "duplicated") {
        window.alert("标签已存在");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  > li {
    $h: 44px;
    display: flex;
    line-height: $h;
    min-height: $h;
    align-items: center;
    justify-content: space-between;
    > svg {
      color: #000000;
      font-size: 18px;
      margin-right: 16px;
    }
  }
}
.createTag {
  background: #767676;
  color: white;
  height: 40px;
  border-radius: 4px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>
