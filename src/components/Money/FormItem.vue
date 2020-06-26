<template>
  <div>
    <label class="notes" :class="classPrefix+'-lable'">
      <span class="name" :class="classPrefix+'-items'">
        <Icon name="write" />
        {{ fieldName }}
      </span>
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
  @Prop(String) classPrefix?: string;
  @Prop(String) readonly value!: string;
  // methods
  onValueChanged(value: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
.notes {
  display: block;
  font-size: 16px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    padding-left: 10px;
    background: transparent;
    border: none;
    height: 40px;
    flex-grow: 1;
  }
}
</style>
