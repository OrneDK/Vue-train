<template>
  <div>
    父组件值:{{mny}}
    <!-- ref可以用在dom元素上 获取的是dom节点  放到组件上,获取的就是当前的组件-->

    <Son1 v-model="mny" ref="son1"></Son1>
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
      mny: 100,
      age: 26
    };
  },
  methods: {
    say() {
      console.log("父组件的say方法,孙子组件通过$listeners调用父组件方法");
    }
  },
  mounted() {
    // 通过this.$refs.(要使用的组件)即可调用 组件的属性 和方法
    this.$refs.son1.say();
    console.log(this.$refs.son1.list); //子组件的数据哟
    this.$refs.son1.list = 2;
    console.log(this.$refs.son1.list); //2
  }
};
// 1.子组件上绑定事件 设置值为回传的cat值
// 2.
</script>
<style scoped>
</style>
