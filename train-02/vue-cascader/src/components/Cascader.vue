<template>
  <div>
    <div class="trigger" @click="isVisible=!isVisible">
      <slot></slot>
    </div>
    <div class="content" v-if="isVisible">显示面板</div>
  </div>
</template>

<script>
export default {
  name: "Cascader",
  data() {
    return {
      isVisible: false
    };
  }
};
</script>

<style lang="stylus" scoped>
.trigger {
  width: 150px;
  height: 25px;
  border: 1px solid #cc;
}
</style>