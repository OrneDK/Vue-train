<template>
  <div>
    父组件值:{{mny}}
    <Son1 v-model="mny"></Son1>
  </div>
</template>
<script>
import Son1 from "./Son1";
export default {
  // Provide把自己暴露出去,一般常用于库的组件编写,业务中不推荐(会造成逻辑混乱)
  provide(){
    return {parent:this}
  },
  components: {
    Son1
  },
  data() {
    return {
      mny: 100,
      age: 26
    };
  },
  methods: {
    say() {
      console.log("父组件的say方法,孙子组件通过$listeners调用父组件方法");
    }
  }
};
// 1.子组件上绑定事件 设置值为回传的cat值
// 2.
</script>
<style scoped>
</style>
