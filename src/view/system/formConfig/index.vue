<template>
  <div>
    <PageCard header="配置化表单">
      <FormCard ref="FormCard" :form-items="formItems" :form-config="formConfig" :data="form"></FormCard>
    </PageCard>
  </div>
</template>

<script>
  export default {
    name: 'FormConfig',
    components:{},
    data() {
      return {
        // 主Form
        form: {
          name: 'name', // 名称
          passWord: 'password', // 密码
          tag: 'tag', // 编号
          textInput: '', // 文本域
          textArea: '', // 富文本
          state: 1, // 状态
          ready: 1, // 只读
          select1: 1, // 下拉框(静态数据)
          select2: 1, // 下拉框(数据字典)
          select3: 1, // 下拉框(定义接口)
          select4: 1, // 下拉框(树)
          select5: 1, // 下拉框(树多选含父)
          select6: 1, // 下拉框(树多选不含父)
        },
        formConfig: {
          labelWidth: '128px'
        },
        // 配置化表单
        formItems:[
          { type: 'group', label: '基础信息', span: 24},
          { label: '名称', prop: 'name', component: 'Input', span: 6},
          { label: '密码', prop: 'password', component: 'Input', span: 6, props:{ 'placeholder': '请输入密码', 'show-password': true}},
          { label: '编号', prop: 'tag', component: 'Input', span: 6, props:{ 'disabled' : true }},
          { label: '只读', prop: 'ready', component: 'Label', span: 6},
          { label: '下拉框(静态数据)', prop: 'select1', component: 'SelectDefault', offset: 4, span: 6, listeners: { wtq1:($event)=> this.www($event), wtq2:($event)=> this.www($event) }, props:{'placeholder': '请选择', 'options': [ {value: 1, label: '选项1'}, {value: 2, label: '选项2'}]}},
          { label: '下拉框(数据字典)', prop: 'select2', component: 'DictSelect', offset: 4, span: 6, props:{ 'placeholder': '请选择', 'dictType': 'ABCD'}},
          { label: '下拉框(定义接口)', prop: 'select3', component: 'SelectService', offset: 4, span: 6, props:{ 'placeholder': '请选择', 'url': '/fwjg/selectList/wtq', 'defaultProps': {'label': 'select_name', 'value': 'select_id'}}},
          { label: '下拉框(树)', prop: 'select4', component: 'SelectTreeService', offset: 4, span: 6, props:{ 'placeholder': '请选择', 'url': '/fwjg/treeSelectList/wtq', 'defaultProps': {'label': 'tree_label', 'value': 'tree_value'}}},
          { label: '下拉框(树含父)', prop: 'select5', component: 'SelectTreeService', offset: 4, span: 6, props:{ 'multiple': true, 'placeholder': '请选择', 'url': '/fwjg/treeSelectList/wtq', 'defaultProps': {'label': 'tree_label', 'value': 'tree_value'}}},
          { label: '下拉框(树不含父)', prop: 'select6', component: 'SelectTreeService', offset: 4, span: 6, props:{ 'multiple': true, 'leaf-only': true, 'placeholder': '请选择', 'url': '/fwjg/treeSelectList/wtq', 'defaultProps': {'label': 'tree_label', 'value': 'tree_value'}}},
          { label: '文本域', prop: 'textInput', component: 'TextInput', span: 20, props:{ 'placeholder': '文本域', 'rows': 4}},
          { label: '富文本', prop: 'textArea', component: 'BaseEditor', span: 20}
        ]
      }
    },
    watch: {
      'form.select1': (val) => {
        console.dir(val)
      }
    },
    mounted() {
    },
    methods: {
      www(value) {
        console.dir(value)
      }
    }
  }
</script>

<style lang="less">
</style>
