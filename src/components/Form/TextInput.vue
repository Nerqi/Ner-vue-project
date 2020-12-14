<template>
  <el-input v-bind="$attrs" v-on="evet" type="textarea" :rows="rows" :placeholder="placeholder"></el-input>
</template>
<script>
export default {
  name: 'TextInput',
  props: {
    rows: {
      type: Number,
      default: 3
    },
    placeholder:{
        type: String,
        default: '请输入'
      }
  },
  computed:{
    evet(){
      return this.$listeners;
    },
  },

}
</script>

<style scoped>

</style>
