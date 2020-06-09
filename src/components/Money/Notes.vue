<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text " v-model="value" placeholder="在这里添加备注" />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch, Prop } from "vue-property-decorator";
@Component
export default class Notes extends Vue {
  value = "";
  onInput(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
  }
  @Watch("value")
  onValueChanged(value: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
.notes {
  background: #f5f5f5;
  display: block;
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    border: none;
    height: 64px;
    flex-grow: 1;
  }
}
</style>