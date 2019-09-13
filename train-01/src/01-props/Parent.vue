<template>
  <div>
    父组件的钱:{{mny}}
    <Son1 :mny="mny"></Son1>
  </div>
</template>
<script>
// import Son1 from "./Son1";
import Son1 from "./Son1";

export default {
  components:{
    Son1
  },
  data(){
    return{
      mny:100
    }
  }
};
</script>
<style scoped>
</style>