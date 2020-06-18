<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/lables/edit/${tag.id}`">
          <span>{{ tag.name }}</span>
          <Icon name="right" />
        </router-link>
      </div>
      <div class="createTag-wrapper">
        <Button class="createTag" @click="createTag">新增标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { Component } from "vue-property-decorator";

@Component({
  computed: {
    tags() {
      return this.$store.state.tagList;
    }
  }
})
export default class Lables extends Vue {
  // 知识点1 读取
  // TODO
  created() {
    this.$store.commit("fetchTag");
  }
  createTag() {
    const name = window.prompt("输入新增标签名")!;
    if (!name) {
      window.alert("标签名不为空");
    } else {
      this.$store.commit("createTag", name);
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
