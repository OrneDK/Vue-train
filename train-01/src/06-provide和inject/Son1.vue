<template>
  <div>
    子组件接入父组件的值:{{value}}
    子组件通过inject取到的父组件的age{{this.parent.age}}
    <button @click="change">子组件回传值更改</button>
    <!-- 所有的属性值都放在$attrs中,所有的监听方法都放在$listeners内 -->
    <GrandSon1 :value="value"></GrandSon1>
  </div>
</template>
<script>
import GrandSon1 from "./GrandSon1";
export default {
  // 子组件通过 inject 来消费 可以是数组
  inject: [
    'parent'
  ],
  components: {
    GrandSon1
  },
  props: {
    value: {
      type: Number
    }
  },
  methods: {
    change() {
      this.$emit("input", 300);
    }
  }
};
</script>
<style scoped>
</style>