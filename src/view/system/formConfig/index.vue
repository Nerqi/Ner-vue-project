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
          select: 1, // 下拉框
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
          { label: '下拉框(静态数据)', prop: 'select', component: 'SelectDefault', span: 6, props:{'placeholder': '请选择', 'options': [ {value: 1, label: '选项1'}, {value: 2, label: '选项2'}]}},
          { label: '下拉框(数据字典)', prop: 'select', component: 'DictSelect', span: 6, props:{ 'placeholder': '请选择', 'dictType': 'ABCD'}},
          { label: '下拉框', prop: 'select', component: 'SelectDefault', span: 6, props:{ 'placeholder': '请选择', 'options': [ {value: 1, label: '选项1'}, {value: 2, label: '选项2'}]}},
          { label: '下拉框', prop: 'select', component: 'SelectDefault', span: 6, props:{ 'placeholder': '请选择', 'options': [ {value: 1, label: '选项1'}, {value: 2, label: '选项2'}]}},
          { label: '文本域', prop: 'textInput', component: 'TextInput', span: 24, props:{ 'placeholder': '文本域', 'rows': 4}},
          { label: '富文本', prop: 'textArea', component: 'BaseEditor', span: 24}
        ]
      }
    },
    watch: {},
    methods: {}
  }
</script>

<style lang="less">
</style>
