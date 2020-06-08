<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <div class="wrapper">
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
    </div>
  </div>
</template>

<script >
// 导出一个选项
export default {};
</script>
<style lang="scss" scoped>
.tags {
  padding: 16px;
  height: 20vh;
  font-size: 14px;
  display: flex;
  flex-grow: 1;
  flex-direction: column-reverse;
  > .wrapper {
    overflow-y: auto;
    > .current {
      display: block;
      display: flex;
      flex-wrap: wrap;
      margin-right: -16px;
      > li {
        $h: 24px;
        height: $h;
        border-radius: $h/2;
        line-height: $h;
        padding: 0 16px;
        margin-right: 12px;
        margin-bottom: 6px;
        background: #d9d9d9;
      }
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid black;
      padding: 0 3px;
    }
  }
}
</style>