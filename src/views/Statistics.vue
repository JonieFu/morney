
<template>
  <div>
    <Layout>
      <Tabs class-prefix="type" :data-source="typelist" :value.sync="type" />
      <Tabs class-prefix="interval" :data-source="intervallist" :value.sync="interval" />
      <ol>
        <li v-for="(group,index) in result" :key="index">
          <h3 class="title">{{group.title}}</h3>
          <ol>
            <li v-for="item in group.items" :key="item.id" class="record">
              <span>{{tagString(item.tags)}}</span>
              <span class="notes">{{item.notes}}</span>
              <span>￥{{item.amount}}</span>
            </li>
          </ol>
        </li>
      </ol>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Tabs from "@/components/Tabs.vue";
import intervalList from "@/constants/interval";
import typeList from "@/constants/typelist";
@Component({
  components: { Tabs }
})
export default class Statistic extends Vue {
  tagString(tags: Tag[]) {
    return tags.length === 0 ? "无" : tags.join(",");
  }
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  get result() {
    const { recordList } = this;

    type HashTableItem = { title: string; items: RecordItem[] };
    const hashTable: { [key: string]: HashTableItem } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createdAt!.split("T");
      hashTable[date] = hashTable[date] || { title: date, items: [] };
      hashTable[date].items.push(recordList[i]);
    }
    return hashTable;
  }
  created() {
    this.$store.commit("fetchRecords");
  }
  type = "-";
  interval = "day";
  intervallist = intervalList;
  typelist = typeList;
}
</script>

<style lang="scss" scoped>
::v-deep .type-item {
  background: white;
  &.selected {
    background: #c4c4c4;
    &::after {
      display: none;
    }
  }
}
::v-deep .interval-item {
  height: 48px;
}
%item {
  padding: 8px 16px;
  line-height: 24px;

  display: flex;
  justify-content: space-between;
  align-content: center;
}
.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
  overflow: hidden;
}
.title {
  @extend %item;
}
.record {
  background: white;
  @extend %item;
}
</style>
