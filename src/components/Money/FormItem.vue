<template>
  <div>
    <label class="notes">
      <span class="name">{{fieldName}}</span>
      <input
        type="text"
        :value="value"
        @change="onValueChanged($event.target.value)"
        :placeholder="placeholder"
      />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Notes extends Vue {
  // props
  @Prop(String) readonly fieldName!: string;
  @Prop(String) readonly placeholder!: string;
  @Prop({ default: "" }) readonly value!: string;
  // methods
  onValueChanged(value: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
.notes {
  display: block;
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    background: transparent;
    border: none;
    height: 40px;
    flex-grow: 1;
  }
}
</style>