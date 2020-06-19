<template>
  <div>
    <Layout class-prefix="layout">
      <number-pad :value.sync="record.amount" @submit="saveRecord" />
      <Tabs :dataSource="typelist" :value.sync="record.type" />
      <FormItem field-name="备注" placeholder="在这里添加备注" @update:value="onUpdateNotes" />
      <Tags @update:value="onUpdateTags" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import NumberPad from "@/components/Money/numberPad.vue";

import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";
import store from "@/store/index";
import typeList from "@/constants/typelist";
import Tabs from "@/components/Tabs.vue";
@Component({
  components: { NumberPad, FormItem, Tags, Tabs }
})
export default class Money extends Vue {
  // data
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0
  };
  typelist = typeList;
  // hooks
  created() {
    this.$store.commit("fetchRecords");
  }
  // computed
  get recordList() {
    return this.$store.state.recordList;
  }
  get tags() {
    // TODO
    return this.$store.state.tagList;
  }
  // methods
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  onUpdateTags(tags: string[]) {
    this.record.tags = tags;
  }
  saveRecord() {
    this.$store.commit("createRecord", this.record);
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

