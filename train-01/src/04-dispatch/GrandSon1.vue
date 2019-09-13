<template>
  <div>
    <!-- 使用第一种 第二种时  把此处改为cat(即前两种方法可以自定义数据名) -->
    孙子组件接入爷爷组件的值:{{value}}
    <button @click="changeParent" @say="say">孙子组件回传值更改</button>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number
    }
  },
  methods: {
    changeParent() {
      // dispatch 只会通知自己的父亲
      // 使用$parent 访问父组件的值  多级嵌套就需要写多个$parent,很不美观,所以就有了04-$dispatch
      this.$dispatch("input", 500);
    },
    say(){
      console.log('孙子组件的say方法');
    }
  }
};
</script>
<style scoped>
</style>