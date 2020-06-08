<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input class="value" type="text " placeholder="在这里添加备注" />
    </label>
  </div>
</template>

<script>
export default {};
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