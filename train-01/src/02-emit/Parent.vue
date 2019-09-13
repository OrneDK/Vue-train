<template>
  <div>
    父组件值:{{mny}}
    <!-- <button @click="fatherClick">更新父组件的值</button> -->
    <!-- <Son1 :cat="mny" @update="change"></Son1> -->
    <!-- 等同于下方 -->
    <Son1 :cat="mny" @update:cat="(cat)=> this.mny=cat"></Son1>
    <!-- 等同于下方:语法糖    同步数据方法一   -->
    <Son1 :cat.sync="mny"></Son1>
    <!--  v-model  有局限性:传值必须为:value 绑定事件必须为@input        同步数据方法二 -->
    <Son1 :value="mny" @input="(mny)=>{this.mny=mny}"></Son1>
  </div>
</template>
<script>
import Son1 from "./Son1";
export default {
  components: {
    Son1
  },
  data() {
    return {
      mny: 100
    };
  },
  methods: {
    // change中的值为子组件回传的值,更新后父组件与子组件都更新
    // change(cat) {
    //   this.mny = cat;
    // },
    // fatherClick() {
    //   this.mny = 200;
    // }
  }
};
// 1.子组件上绑定事件 设置值为回传的cat值
// 2.
</script>
<style scoped>
</style>
