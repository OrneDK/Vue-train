<template>
  <div>
    父组件值:{{mny}}
    <Son1 v-model="mny" @say="say"></Son1>
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
    say() {
      console.log("组件自己的say方法");
    }
  }
};
// 1.子组件上绑定事件 设置值为回传的cat值
// 2.
</script>
<style scoped>
</style>
