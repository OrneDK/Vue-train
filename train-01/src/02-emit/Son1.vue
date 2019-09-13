<template>
  <div>
    <!-- 使用第一种 第二种时  把此处改为cat(即前两种方法可以自定义数据名) -->
    子组件接入父组件的值:{{value}}  
    <button @click="change">子组件回传值更改</button>
  </div>
</template>
<script>
export default {
  props: {
    // 使用第一种 第二种时  把此处改为cat(即前两种方法可以自定义数据名)
    value: {
      type: Number
    }
  },
  methods: {
    change() {
      // 第一种普通方法
      // this.$emit('update',300)
      // 第二种:sync 方法
      // this.$emit('update:value', 300);
      // 第三种: v-model方法
      this.$emit('input',300)
    }
  }
};
</script>
<style scoped>
</style>