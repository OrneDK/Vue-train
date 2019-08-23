<template>
  <div class="content">
    <div class="content-left">
      <div v-for="(item,index) in options" :key="index">
        <div class="label" @click="select(item)">{{item.label}}</div>
      </div>
    </div>
    <div class="content-right" v-if="lists && lists.length">
      <CascaderItem :options="lists" :level="level+1" @change="change" :value="value"></CascaderItem>
    </div>
  </div>
</template>
<script>
import cloneDeep from "lodash/cloneDeep";
export default {
  name: "CascaderItem",
  computed: {
    lists() {
      if (this.value[this.level] && this.value[this.level].id) {
        let o = this.options.find(
          item => item.id === this.value[this.level].id
        );
        return o.children;
      }
    }
  },
  data() {
    return { currentSelected: null };
  },
  methods: {
    change(item) {
      this.$emit("change", item);
    },
    select(item) {
      this.currentSelected = item;
      let cloneValue = cloneDeep(this.value);
      cloneValue[this.level] = item;
      cloneValue.splice(this.level + 1);
      this.$emit("change", cloneValue);
    }
  },
  props: {
    level: {
      type: Number
    },
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