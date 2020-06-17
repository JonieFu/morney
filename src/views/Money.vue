<template>
  <div>
    <Layout class-prefix="layout">
      <number-pad :value.sync="record.amount" @submit="saveRecord" />
      <Types :type.sync="record.type" />
      <FormItem field-name="备注" placeholder="在这里添加备注" @update:value="onUpdateNotes" />
      <Tags @update:value="onUpdateTags" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import NumberPad from "@/components/Money/numberPad.vue";
import Types from "@/components/Money/Types.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";
import store from "@/store/index2";

@Component({
  components: { NumberPad, Types, FormItem, Tags }
})
export default class Money extends Vue {
  // data
  recordList = store.recordList;
  tags = store.tagList;
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0
  };
  // methods
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  onUpdateTags(tags: string[]) {
    this.record.tags = tags;
  }
  saveRecord() {
    store.createRecord(this.record);
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

