<template>
  <div>
    <Layout class-prefix="layout">
      <numberPad :value.sync="record.amount" @submit="saveRecord" />
      <Types :type.sync="record.type" />
      <FormItem field-name="备注" placeholder="在这里添加备注" @update:value="onUpdateNotes" />
      <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Types from "@/components/Money/Types.vue";
import numberPad from "@/components/Money/numberPad.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";
import { Component } from "vue-property-decorator";
import tagListModel from "@/models/tagListModel.ts";

@Component({
  components: { Types, numberPad, FormItem, Tags }
})
export default class Money extends Vue {
  name = "Money";
  recordList: RecordItem[] = window.recordList;
  tags = window.tagList;
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0
  };
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    window.createRecord(this.record);
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

