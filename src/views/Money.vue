<template>
  <div>
    <Layout class-prefix="layout">
      <number-pad
        :value.sync="record.amount"
        @submit="saveRecord"
        :notes="record.notes"
        @update:notes="record.notes =$event"
      />
      <!-- <FormItem field-name="备注:" placeholder="在这里添加备注" :value.sync="record.notes" /> -->
      <Tags :tags="record.tags" @update:value="onUpdateTags" />
      <Tabs class="tabs" :dataSource="typeList" :value.sync="record.type" />
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
import typeList from "@/constants/typeList";
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
  typeList = typeList;
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
  onUpdateTags(tags: Tag[]) {
    this.record.tags = tags;
  }
  saveRecord(e: any) {
    if (this.record.tags.length === 0) {
      return window.alert("至少选择一个标签");
    }
    this.$store.commit("createRecord", this.record);
    if (this.$store.state.createRecordError === null) {
      window.alert("已保存");
      this.$store.commit("fetchTag");
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes {
  padding: 12px 0;
}
</style>
