<template>
  <div>
    <!-- 使用第一种 第二种时  把此处改为cat(即前两种方法可以自定义数据名) -->
    孙子组件接入爷爷组件的值:{{value}}
    孙子组件通过v-bind绑定过来的父组件传入子组件的值:{{$attrs}}
    <button @click="changeParent">孙子组件回传值更改</button>
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
    }
  },
  mounted () {
    this.$listeners.say()
  }
};
</script>
<style scoped>
</style>