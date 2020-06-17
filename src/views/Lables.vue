<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/lables/edit/${tag.id}`">
          <span>{{tag.name}}</span>
          <Icon name="right" />
        </router-link>
      </div>
      <div class="createTag-wrapper">
        <Button class="createTag" @click="createTag">新增标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { Component } from "vue-property-decorator";
import tagListModel from "../models/tagListModel";
// import Button from "@/components/Button.vue"
tagListModel.fetch();
@Component
export default class Lables extends Vue {
  tags = window.tagList
  createTag() {
    
    const name = window.prompt("输入新增标签名")!;
    if (name) {
      const message = tagListModel.create(name);
      if (message === "duplicated") {
        window.alert("标签已存在");
      }
      window.alert("创建标签成功")
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  > .tag {
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
.createTag-wrapper {
  margin-top: 24px;
  text-align: center;
}
</style>
