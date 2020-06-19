<template>
  <div>
    <Layout>
      <div class="navBar">
        <Icon class="letfIcon" name="left" @click.native="goBack" />
        <span class="title">编辑标签</span>
      </div>
      <div class="form-wrapper">
        <FormItem
          :value="currentTag.name"
          @update:value="update"
          fieldName="标签名"
          placeholder="请编辑标签"
        />
      </div>
      <div class="button-wrapper">
        <Button @click="remove">删除标签</Button>
      </div>
    </Layout>
  </div>
</template>
s
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import FormItem from "../components/Money/FormItem.vue";
import Button from "@/components/Button.vue";

@Component({
  components: { Button, FormItem }
})
export default class EditLabels extends Vue {
  // computed
  get currentTag() {
    return this.$store.state.currentTag;
  }
  // hooks
  created() {
    const id = this.$route.params.id;
    this.$store.commit("fetchTag");
    this.$store.commit("setCurrentTag", id);

    if (!this.currentTag) {
      console.log("错了");
      this.$router.replace("/404");
    }
  }
  // methods
  update(name: string) {
    this.$store.commit("updateTag", { id: this.currentTag.id, name });
  }
  remove() {
    if (this.currentTag) {
      this.$store.commit("removeTag", this.currentTag.id);
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
