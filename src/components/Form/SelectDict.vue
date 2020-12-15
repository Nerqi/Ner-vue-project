<template>
  <Select v-bind="$attrs"  v-on="evet" :options='list' :defaultProps="computedDefaultProps" :placeholder="placeholder"></Select>
</template>

<script>
import { getDictList } from '@api/service'
import Select from './SelectDefault'

export default {
  name: 'DictSelect',
  components:{ Select },
  props: {
    defaultProps:{
      type: Object,
      default:()=>{
        return{
          label: 'param_name',
          value: 'param_id'
        }
      }
    },
    dictType: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
  },
  data() {
    return {
      list:[],
    }
  },

  computed:{
    computedDefaultProps() {
      return {
        label: 'param_name',
        value: 'param_id'
      }
    },
    evet(){
      return this.$listeners;
    },
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      let { dicList : dicList }= await getDictList(this.dictType);
      this.list = dicList || [];
      this.$emit('getDataSuccess',{ data: this.list })
    }
  }
}
</script>

<style scoped>

</style>
