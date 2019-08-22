<template>
  <div>
    子组件(父传子的值):{{value}}
    <button @click="change">点击修改</button>
  </div>
</template>
<script>
// ->1.遇到的问题:props不是响应式的更新数据,子组件不能自己更改自己的值
// ->2.解决办法:子组件回传父组件事件,让父组件更新后,子组件属性也得以更新
export default {
  // props方法:子组件从父组件中传入value
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  //$emit方法:
  //   1.父组件定义自定义事件  当触发input时, 使用change方法(change方法的作用是把回传的value值赋给mny)
  //   2.子组件定义一个点击事件change,当触发时,调用父组件的input方法,回传值value为200

  methods: {
    change() {
      this.$emit("update:value", 200);
    }
  }
};
</script>