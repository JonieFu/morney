<template>
  <div>
    <button class="button" @click="$emit('click',$event)">
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class COMPONENT_NAME extends Vue {}
</script>

<style lang="scss" scoped>
.button {
  border: none;
  background: #f19b37;
  color: white;
  height: 40px;
  border-radius: 4px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>