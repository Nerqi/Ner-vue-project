<template>
  <el-input v-bind="$attrs" v-on="evet" :placeholder="placeholder"></el-input>
</template>
<script>
export default {
  name: 'Input',
  props: {
    placeholder: {
      type: String,
      default: '请输入'
    },
  },
  computed:{
    evet(){
      return this.$listeners;
    },
  },
}
</script>

