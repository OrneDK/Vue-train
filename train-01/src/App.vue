<template>
  <div id="app">
    <router-view />
    <Parent></Parent>
  </div>
</template>
<script>
// import Parent from "./01-props/Parent";        // props
// import Parent from "./02-parent/Parent"; // this.$emit
// import Parent from "./03-parent/Parent"; // this.$parent.$emit
// import Parent from "./05-attr和listeners/Parent"; // 在main.js中定义 Vue.$dispatch
//import Parent from "./05-attr和listeners/Parent"; // 通过$attrs访问父组件定义的属性值,通过$listeners调用父组件的方法
//import Parent from "./06-provide和inject/Parent"; // 父组件通过provide暴露出去,子组件通过inject来使用父组件
import Parent from "./07-ref/Parent"; // 父组件通过provide暴露出去,子组件通过inject来使用父组件

export default {
  components: {
    Parent
  }
};
</script>
<style>
</style>
