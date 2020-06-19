
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
import intervalList from "@/constants/interval";
import typeList from "@/constants/typelist";
@Component({
  components: { Types, Tabs }
})
export default class Statistic extends Vue {
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
  &.selected {
    &::after {
    }
  }
}
</style>
