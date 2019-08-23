<template>
  <div id="app">
    <!-- 获取用户选择的数据 -->
    <Cascader :options.sync="options" v-model="value" :lazyload="lazyload"></Cascader>
  </div>
</template>

<script>
import cityList from "./data.json";
import Cascader from "./components/Cascader";
// 异步加载(模拟服务器异步请求)
const fetchData = pid => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cityList.filter(item => item.pid == pid));
    }, 1000);
  });
};

export default {
  components: {
    Cascader
  },
  async created() {
    this.options = await fetchData(0);
  },
  data() {
    return {
      value: [],
      options: []
    };
  },
  methods: {
    // 懒加载(异步加载,请求一个加载一个)
    async lazyload(id, callback) {
      let children = await fetchData(id);
      callback(children);
    }
  }
};
</script>
<style lang="stylus"></style>
