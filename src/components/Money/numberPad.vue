<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <FormItem field-name="备注:" placeholder="说点什么吧~" :value.sync="notes" class-prefix="notes" />
    <div class="buttons">
      <div class="left">
        <button @click="inputContent">1</button>
        <button @click="inputContent">2</button>
        <button @click="inputContent">3</button>
        <button @click="inputContent">4</button>
        <button @click="inputContent">5</button>
        <button @click="inputContent">6</button>
        <button @click="inputContent">7</button>
        <button @click="inputContent">8</button>
        <button @click="inputContent">9</button>
        <button @click="inputContent">.</button>
        <button @click="inputContent" class="zero">0</button>
        <button class="clear" @click="clear">清空</button>
      </div>
      <div class="right">
        <button @click="remove">
          <Icon name="delete" />
        </button>
        <button @click="ok" class="ok">OK</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FormItem from "@/components/Money/FormItem.vue";
import typeList from "@/constants/typeList";
import { Component, Prop } from "vue-property-decorator";
@Component({
  components: { FormItem }
})
export default class NumberPad extends Vue {
  @Prop(Number) value!: number;
  output: string = this.value.toString();
  notes: string = "";
  inputContent(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    const input = button.textContent!;
    if (this.output.length === 16) {
      return;
    }
    if (this.output === "0" && "0123456789".indexOf(input) >= 0) {
      this.output = input;
      return;
    }
    if (this.output.indexOf(".") >= 0 && input === ".") {
      return;
    }
    this.output += input;
  }
  remove() {
    if (this.output.length === 1) {
      this.output = "0";
    } else {
      this.output = this.output.slice(0, -1);
    }
  }
  clear() {
    this.output = "0";
    this.notes = "";
  }
  ok() {
    this.$emit("update:value", parseFloat(this.output));
    this.$emit("update:notes", this.notes);
    this.$emit("submit", parseFloat(this.output));
    this.clear();
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
  .output {
    font-size: 24px;
    color: #f19b37;
    font-family: Consolas, monospace;
    font-weight: 700;
    padding: 5px;
    background: white;
    text-align: right;
  }
  .notes {
    padding: 12px 0;
  }

  .buttons {
    display: flex;
    font-size: 20px;
    font-weight: 700;
    font-family: "Karma";
    background: #ffffff;
    button {
      border: none;
    }
    .left {
      display: flex;
      flex-wrap: wrap;
      width: 75%;
      color: #7f7f7f;
      > button {
        width: 33.333333%;
        height: 50px;
        background: #fff;
        &:focus {
          background: #eeeeee;
        }
      }
    }
    .right {
      display: flex;
      width: 25%;
      flex-direction: column;
      button {
        height: 100px;
        width: 100%;
        background: #f3f3f3;

        &:first-child {
          background: white;
          &:focus {
            background: #eee;
          }
        }
        &.ok {
          color: white;
          background: #f19b37;
        }
      }
    }
  }
}
::v-deep .notes {
  border: 1px solid #f5f5f5;
  padding-left: 0px;
  padding: 5px;
  border-radius: 5px;
}
::v-deep .notes-items {
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-family: "Karma";
  background: #f19b37;
}
</style>
