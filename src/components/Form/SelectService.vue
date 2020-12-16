<template>
  <Select v-bind="$attrs"  v-on="evet" :options='list' :defaultProps="defaultProps" :placeholder="placeholder"></Select>
</template>

<script>
  import request from '@/utils/request'
  import Select from './SelectDefault'

  export default {
    name: 'SelectService',
    components:{
      Select
    },
    props: {
      url:{
        type:String,
        required:true
      },
      defaultProps: {
        type: Object,
        default:()=>{
          return{
            label: 'label',
            value: 'value'
          }
        }
      },
      clearable: {
        type: Boolean,
        default:true
      },
      // 默认参数
      defaultParams: {
        type: Object,
        default:()=>{
          return{
          }
        }
      },
      placeholder: {
        type: String,
        default: '请选择'
      },
    },
    data() {
      return {
        list:[]
      }
    },
    computed:{
      evet(){
        return this.$listeners;
      },
    },
    watch: {
      '$attrs.value': {
        handler: function(val) {
        },
        immediate: true
      },
      url:{
        handler() {
          this.$attrs.value = '';
          this.getList()
        },
        deep: true
      }
    },
    created() {
      this.getList()
    },
    methods: {
      async getList () {
        let defaultParams = this.defaultParams;
        let url = this.url;
        if(!url){
          return
        }
        let {selectList: selectList} = await request({
          url,
          method: 'get',
          params:{
            ...defaultParams,
          }
        });
        let { label, value }= this.defaultProps;
        this.list = selectList || [];
        if(this.list && this.list.length > 0 ){
          this.list = this.list.reduce((tmp, item)=> {
            item.label = item[label];
            item.value = item[value];
            return this.list;
          }, {})
        }
      },
    }
  }
</script>

<style scoped>

</style>
