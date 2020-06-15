<template>
  <div>
    <Layout>
      <div class="navBar">
        <Icon class="letfIcon" name="left" />
        <span class="title">编辑标签</span>
      </div>
      <div class="form-wrapper">
        <FormItem fieldName="标签名" placeholder="请编辑标签" />
      </div>

      <div class="button-wrapper">
        <Button>删除标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Layout from "@/components/Layout.vue";
import tagListModel from "../models/tagListModel";
import FormItem from "../components/Money/FormItem.vue";
import Button from "@/components/Button.vue";

@Component({ components: { FormItem } })
export default class COMPONENT_NAME extends Vue {
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter(tag => tag.id === id)[0];

    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace("/404");
    }
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