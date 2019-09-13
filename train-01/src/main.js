import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// dispatch 向上通知
Vue.prototype.$dispatch = function (eventName, value) {
  // parent定义为调用组件的父亲
  let parent = this.$parent
  // while循环parent
  while (parent) {
    // 父亲通知 事件名称 和 内容
    parent.$emit(eventName, value)
    // 如果上层还有父亲,则parent指向此组件父亲的父亲,继续循环,直到结束
    parent = parent.$parent
  }
}
//    -> 用法: 直接在需要调用的组件中调用this.$dispatch循环即可
// broadcast 向下广播
Vue.prototype.$broadcast = function (eventName) {
  // 定义broadcast方法,传入值为children
  const broadcast = (children) => {
    // 传入的children遍历,
    children.forEach(child => {
      // 触发传入的方法名称
      child.$emit(eventName)
      // 如果child中还有孩子
      if (child.$children) {
        // 那么把它的孩子传入，再执行broadcast方法(递归)
        broadcast(child.$children)
      }
    })
  }
  broadcast(this.$children)
}
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
