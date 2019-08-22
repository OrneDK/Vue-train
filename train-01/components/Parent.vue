<template>
  <div>
    父组件钱数:{{mny}}
    <Son1 :value="mny" @update:value="(value)=>this.mny = value"></Son1>
    <!-- 下方的sync是上方的行内函数的语法糖 -->
    <Son1 :value.sync="mny"></Son1>
    <!-- v-model只传固定value,不能传递事件(在此处定义为不能点击) 传自定义值及事件(:aaa等等之类)用.sync -->
    <Son1 v-model="mny"></Son1>
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
    change(value) {
      this.mny = value;
    }
  }
};
</script>