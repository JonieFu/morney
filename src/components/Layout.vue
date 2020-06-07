<template>
  <div class="Layout-wrapper">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot />
    </div>
    <Nav />
  </div>
</template>

<script>
export default {
  name: "Layout",
  props: ["classPrefix"]
};
</script>

<style lang="scss" scoped>
.Layout-wrapper {
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  overflow: auto;
  flex-grow: 1;
}
</style>