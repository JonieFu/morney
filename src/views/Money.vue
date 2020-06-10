<template>
  <div>
    <Layout class-prefix="layout">
      <numberPad :value.sync="record.amount" @submit="saveRecord" />
      <Types :type.sync="record.type" />
      <Notes @update:value="onUpdateNotes" />
      <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Types from "@/components/Money/Types.vue";
import numberPad from "@/components/Money/numberPad.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";
import { Component, Watch } from "vue-property-decorator";
import model from "@/models/recordList.ts";
import tagListModel from "@/models/tagListModel.ts";

const recordList: RecordItem[] = model.fetch();
const tagList: string[] = tagListModel.fetch();

@Component({
  components: { Types, numberPad, Notes, Tags }
})
export default class Money extends Vue {
  name = "Money";
  recordList: RecordItem[] = recordList;
  tags = tagList;
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
    const record2: RecordItem = model.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
    console.log(this.recordList);
  }
  @Watch("recordList")
  onRecordListChange() {
    model.save(this.recordList);
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

