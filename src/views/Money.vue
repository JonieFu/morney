
<template>
  <div>
    <Layout>
      <div class="tags">
        <ol class="current">
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <div class="new">
          <button>新增标签</button>
        </div>
      </div>
      <div>
        <lable class="note">
          <span class="name">备注</span>
          <input class="value" type="text " placeholder="在这里添加备注" />
        </lable>
      </div>
      <div>
        <ul class="types">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>

      <div class="numberPad">
        <div class="output">100</div>
        <div class="button">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "Money"
};
</script>

<style lang="scss">
</style>
