<template>
  <div>
    <Layout>
      <div class="navBar">
        <Icon class="letfIcon" name="left" @click.native="goBack" />
        <span class="title">编辑标签</span>
      </div>
      <div class="form-wrapper">
        <FormItem :value="tag.name" @update:value="updateTag" fieldName="标签名" placeholder="请编辑标签" />
      </div>
      <div class="button-wrapper">
        <Button @click="remove">删除标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import FormItem from "../components/Money/FormItem.vue";

@Component({ components: { FormItem } })
export default class EditLables extends Vue {
  // data
  tag?: { id: string; name: string } = undefined;
  // hooks
  created() {
    // TODO
    // this.tag = store.findTag(this.$route.params.id);
    if (!this.tag) {
      this.$router.replace("/404");
    }
  }
  // methods
  updateTag(name: string) {
    if (this.tag) {
      // TODO
      // store.updateTag(this.tag.id, name);
    }
  }
  remove() {
    if (this.tag) {
      // TODO
      // store.removeTag(this.tag.id);
      this.goBack();
    }
  }
  goBack() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  line-height: 48px;
  font-size: 16px;
  background: white;
  position: relative;
  margin-bottom: 4px;
  > .letfIcon {
    position: absolute;
    width: 24px;
    height: 24px;
    left: 16px;
    top: 12px;
  }
  > .title {
  }
}
.form-wrapper {
  height: 40px;
  background: white;
}
.button-wrapper {
  margin-top: 24px;
  text-align: center;
}
</style>