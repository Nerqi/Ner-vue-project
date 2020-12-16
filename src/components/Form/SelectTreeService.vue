<template>
  <avue-input-tree v-bind="$attrs"  v-on="evet" :dic='treeList' :placeholder="placeholder" type="tree" default-expand-all></avue-input-tree>
</template>

<script>
  import request from '@/utils/request'
  import Select from './SelectDefault'

  export default {
    name: 'SelectTreeService',
    components:{
      Select
    },
    props: {
      url:{
        type: String,
        required: true
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
        treeList: []
      }
    },
    computed:{
      evet(){
        if (this.$listeners.change) {
          this.$listeners.change =  (value)=>{
            this.$emit('change', value);
          }
        }
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
        let {treeSelectList: treeSelectList} = await request({
          url,
          method: 'get',
          params:{
            ...defaultParams,
          }
        });
        let { label, value }= this.defaultProps;
        this.treeList = treeSelectList || [];
        let trans = (data)=> {
          data.forEach(item => {
            item.label = item[label];
            item.value =  item[value];
            item.children && trans(item.children)
          })
        };
        trans(this.treeList)
      },
    }
  }
</script>

<style scoped>

</style>
