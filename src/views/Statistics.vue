<template>
  <div>
    <Layout>
      <Tabs class-prefix="type" :data-source="typeList" :value.sync="type" />
      <div class="wrapper">
        <ol v-if="groupList.length > 0">
          <li v-for="(group, index) in groupList" :key="index">
            <h3 class="title">
              {{ beautify(group.title) }}
              <span>￥{{ group.total }}</span>
            </h3>
            <ol>
              <li v-for="item in group.items" :key="item.id" class="record">
                <span>{{ tagString(item.tags) }}</span>
                <span class="notes">{{ item.notes }}</span>
                <span>￥{{ item.amount }}</span>
              </li>
            </ol>
          </li>
        </ol>
        <div v-else class="noResult">
          目前没有相关记录
          <div class="div">
            <Icon class-prefix="Icon" name="cry" />
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Tabs from "@/components/Tabs.vue";
import typeList from "@/constants/typeList";
import dayjs from "dayjs";
import clone from "@/lib/clone.ts";

@Component({
  components: { Tabs }
})
export default class Statistic extends Vue {
  // data
  type = "-";
  typeList = typeList;
  //metho

  tagString(tags: Tag[]) {
    return tags.length === 0 ? "无" : tags.map(t => t.name).join(", ");
  }
  beautify(string: string) {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(new Date(), "day")) {
      return "今天";
    } else if ((day.isSame(now.subtract(1, "day")), "day")) {
      return "昨天";
    } else if ((day.isSame(now.subtract(1, "day")), "day")) {
      return "前天";
    } else {
      return day.format("YYYY年MM月DD日");
    }
  }

  //method
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  get groupList() {
    const { recordList } = this;
    if (recordList.length === 0) {
      return [];
    }
    const newList = clone(recordList)
      .filter(r => r.type === this.type)
      .sort(
        (a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf()
      );

    type Result = {
      title: string;
      total?: number;
      items: RecordItem[];
    }[];

    if (newList.length === 0) {
      const result: Result = [];
      return result;
    } else {
      const result: Result = [
        {
          title: dayjs(newList[0].createdAt).format("YYYY-MM-DD"),
          items: [newList[0]]
        }
      ];
      for (let i = 1; i < newList.length; i++) {
        const current = newList[i];
        const last = result[result.length - 1];

        if (dayjs(last.title).isSame(dayjs(current.createdAt), "day")) {
          last.items.push(current);
        } else {
          result.push({
            title: dayjs(current.createdAt).format("YYYY-MM-DD"),
            items: [current]
          });
        }
      }
      result.map(group => {
        group.total = group.items.reduce((sum, item) => sum + item.amount, 0);
      });
      return result;
    }
  }
  // hooks
  created() {
    this.$store.commit("fetchRecords");
  }
}
</script>

<style></style>
<style lang="scss" scoped>
::v-deep .type-item {
  color: #f19b37;
  background: white;
  &.selected {
    color: #333;
    background: #f3f3f3;
    &::after {
      display: none;
    }
  }
}
::v-deep .icon.Icon-item {
  margin-top: 20px;
  width: 10em;
  height: 10em;
}
.noResult {
  padding: 16px;
  text-align: center;
}
.wrapper {
  overflow: auto;
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
