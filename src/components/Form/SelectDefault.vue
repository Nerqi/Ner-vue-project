<template>
  <el-select v-bind="$attrs" v-on="evet" :placeholder="placeholder" :defaultProps="defaultProps" @change="change">
    <el-option v-for="item in list" :key="item.value" :label="item.label" :value="item.value"></el-option>
  </el-select>
</template>
<script>
export default {
  name: 'SelectDefault',
  props: {
    defaultProps:{
      type: Object,
      default:()=>{
        return{
          label: 'label',
          value: 'value'
        }
      }
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    options: Array,
  },
  computed:{
    list(){
      const { label, value }= this.defaultProps;
      return this.options.reduce((tmp, item)=> {
        item.label = item[label];
        item.value = item[value];
        return this.options;
      }, {})
    },
    evet(){
      return this.$listeners;
    },
  },
  methods: {
    change(value) {
      this.$emit('wtq1', 'wtq1');
      this.$emit('wtq2', 'wtq2');
    }
  }
}
</script>

