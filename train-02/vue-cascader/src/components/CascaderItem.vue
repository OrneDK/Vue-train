<template>
  <div>
    <div class="content cascader-item">
      <div class="content-left">
        <div class="label" v-for="(item,key) in options" :key="key">
          <div @click="select(item)">{{item.label}}</div>
        </div>
      </div>
      <div class="content-right" v-if="lists && lists.length">
        <CascaderItem :options="lists"></CascaderItem>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CascaderItem',
  data () {
    return {
      // 当前点击的第一个儿子
      currentSelect: null
    }
  },
  methods: {
    select (item) {
      this.currentSelect = item
    }
  },
  computed: {
    lists () {
      return this.currentSelect && this.currentSelect.children
    }
  },
  props: {
    options: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="stylus">
.cascader-item {
  display: flex
}

.content-left {
  border: 1px solid #ccc
  min-height: 100px
}

.content-right {
  margin-left: -1px
}

.label {
  width: 60px
  font-size: 12px
  line-height: 20px
  color: #606266
  padding-left: 10px
  cursor: pointer
}

.label:hover {
  background: #f5f7fa
}
</style>
