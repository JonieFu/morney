<template>
  <div class="container" ref="container">
    vue echarts
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { Component, Ref, Prop } from "vue-property-decorator";
let echarts = require("echarts");

@Component
export default class vueEharts extends Vue {
  @Prop() option!: object;
  @Ref() container!: HTMLDivElement;
  charts: any;
  mounted() {
    const width = document.documentElement.clientWidth;
    this.container.style.width = `${width - 20}px`;
    console.log(width);

    this.container.style.height = `${(width - 20) * 1.2}px`;

    this.charts = echarts.init(this.container);
    this.charts.setOption(this.option);
  }
}
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid red;
}
</style>
