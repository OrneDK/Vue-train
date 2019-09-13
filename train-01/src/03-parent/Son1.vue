<template>
  <div>
    子组件接入父组件的值:{{value}}
    <button @click="change">子组件回传值更改</button>
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
    }
  }
};
</script>
<style scoped>
</style>