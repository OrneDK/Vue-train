<template>
  <div>
    子组件接入父组件的值:{{value}}
    <button @click="change">子组件回传值更改</button>
    <!-- 所有的属性值都放在$attrs中,所有的监听方法都放在$listeners内 -->
    <GrandSon1 :value="value"></GrandSon1>
  </div>
</template>
<script>
import GrandSon1 from "./GrandSon1";
export default {
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
    },
    say() {
      console.log('我是子组件的say方法哟');
    }
  },
  data(){
    return {
      list:'子组件的数据哟'
    }
  }
};
</script>
<style scoped>
</style>