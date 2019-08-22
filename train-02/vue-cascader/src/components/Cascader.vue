<template>
  <!-- 1.需求：点击输入框以外的内容应该收起面板   ->>> 将功能扩展为指令 -->
  <div v-click-outside="close">
    <div class="trigger" @click="toggle">
      <slot></slot>
    </div>
    <div class="content" v-if="isVisible">
      <div class="content-left">
        <div v-for="(item,key) in options" :key="key">
          <div @click="select(item)">{{item.label}}</div>
        </div>
      </div>
      <div class="content-right" v-if="listsists && lists.length"
        <div v-for="(item,key) in lists" :key="key">
          <div>{{item.label}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cascader",
  //   指令封装
  directives: {
    clickOutside: {
      //inserted是指令当中的钩子函数(生命周期:被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。)
      inserted(el, bindings) {
        //   addEventListener:将指定的监听器注册到对象上，当该对象触发指定的事件时，指定的回调函数就会被执行。
        document.addEventListener("click", e => {
          // 如果
          //   console.log(e, bindings);
          // 如果传参的target属性等于el 或者el.contains(e.target))为true(点击的不是trigger和content返回true)
          if (e.target === el || el.contains(e.target)) {
            //   直接返回
            return;
          }
          // 点击非自己、或者不是自己的儿子就关闭元素(vlue中的参数为close,也就是this.isVisible = false)
          bindings.value();
        });
      }
    }
  },

  data() {
    return {
      isVisible: false,
      currentSelect: null // 当前点击的第一层儿子
    };
  },
  methods: {
    select(item) {
      this.currentSelect = item;
    },
    close() {
      this.isVisible = false;
    },
    toggle() {
      this.isVisible = !this.isVisible;
    }
  },
  computed: {
    lists() {
      return this.currentSelect && this.currentSelect.children
    }
  },
  props: {
    options: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="stylus" scoped>
.trigger {
  width: 150px;
  height: 25px;
  border: 1px solid #cc;
}

.content {
  display: flex;
}
</style>