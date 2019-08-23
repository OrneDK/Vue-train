<template>
  <div>
    <div class="content cascader-item">
      <div class="content-left">
        <div class="label" v-for="(item,key) in options" :key="key">
          <div @click="select(item)">{{item.label}}</div>
        </div>
      </div>
      <div class="content-right" v-if="lists && lists.length">
        <CascaderItem :options="lists" @change="change" :value="value" :level="level+1"></CascaderItem>
      </div>
    </div>
  </div>
</template>
<script>
// 目的:为了实现把子组件的操作拷贝后->返回父组件更新数据
import cloneDeep from "lodash/cloneDeep";
export default {
  // 递归组件必须要使用name属性来实现
  name: "CascaderItem",
  data() {
    return {
      // 当前点击的第一个儿子
      currentSelect: null
    };
  },
  methods: {
    select(item) {
      this.currentSelect = item;
      let cloneValue = cloneDeep(this.value);
      cloneValue[this.level] = item;
      this.$emit("change", cloneValue);
    },
    change(value) {
      this.$emit("change", value);
    }
  },
  computed: {
    lists() {
      return this.currentSelect && this.currentSelect.children;
    }
  },
  props: {
    // 获取当前层级
    level: {
      type: Number,
      dafault: 0
    },
    // 获取数据是数组类型
    value: {
      type: Array,
      default: () => []
    },
    options: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="stylus">
.cascader-item {
  display: flex;
}

.content-left {
  border: 1px solid #ccc;
  min-height: 100px;
}

.content-right {
  margin-left: -1px;
}

.label {
  width: 60px;
  font-size: 12px;
  line-height: 20px;
  color: #606266;
  padding-left: 10px;
  cursor: pointer;
}

.label:hover {
  background: #f5f7fa;
}
</style>
