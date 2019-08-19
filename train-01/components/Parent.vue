<template>
  <div>
    父组件钱数:{{mny}}
    <Son1 :value="mny" @input="change"></Son1>
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