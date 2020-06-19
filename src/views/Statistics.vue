
<template>
  <div>
    <Layout>
      <Tabs class-prefix="type" :data-source="typelist" :value.sync="type" />
      <Tabs class-prefix="interval" :data-source="intervallist" :value.sync="interval" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Types from "@/components/Money/Types.vue";
import Component from "vue-class-component";
import Tabs from "@/components/Tabs.vue";
@Component({
  components: { Types, Tabs }
})
export default class Statistic extends Vue {
  type = "-";
  interval = "day";
  intervallist = [
    { text: "按天", value: "day" },
    { text: "按周", value: "week" },
    { text: "按月", value: "month" }
  ];
  typelist = [
    { text: "支出", value: "-" },
    { text: "收入", value: "+" }
  ];
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
  &.selected {
    &::after {
    }
  }
}
</style>
