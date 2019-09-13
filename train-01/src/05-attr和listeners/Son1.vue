<template>
  <div>
    子组件接入父组件的值:{{value}}
    <button @click="change">子组件回传值更改</button>
    <!-- 所有的属性值都放在$attrs中,所有的监听方法都放在$listeners内 -->
    通过$attrs从父组件传入的属性值:{{this.$attrs}}
    <GrandSon1 v-bind="$attrs" v-on="$listeners" :value="value"></GrandSon1>
  </div>
</template>
<script>
import GrandSon1 from "./GrandSon1";
export default {
  // 通过$attrs传入的值可以设置inheritAttrs为false:功能为不显示属性在渲染的dom上
  inheritAttrs:false,
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