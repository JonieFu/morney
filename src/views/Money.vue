
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
        <lable class="notes">
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

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.notes {
  background: #f5f5f5;
  background: black;
  display: block;
  /* .name {
  }
  input {
  } */
}
.tags {
  padding: 16px;
  font-size: 14px;
  > .current {
    display: flex;

    > li {
      $h: 24px;
      height: $h;
      border-radius: $h/2;
      line-height: $h;
      padding: 0 16px;
      margin-right: 12px;
      background: #d9d9d9;
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
