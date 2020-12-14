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
          textArea: 'tag', // 富文本
          state: 1, // 状态
          ready: 1 // 只读
        },
        formConfig: {
          labelWidth: '90px'
        },
        // 配置化表单
        formItems:[
          { type: 'group', label: '基础信息', span: 24},
          { label: '名称', prop: 'name', component: 'Input', span: 6},
          { label: '密码', prop: 'password', component: 'Input', span: 6, props:{ 'placeholder': '请输入密码', 'show-password': true}},
          { label: '编号', prop: 'tag', component: 'Input', span: 6, props:{ 'disabled' : true }},
          { label: '只读', prop: 'ready', component: 'Label', span: 6},
          { label: '文本域', prop: 'textInput', component: 'TextInput', span: 12, props:{ 'placeholder': '文本域', 'rows': 2}},
          { label: '富文本', prop: 'textArea', component: 'TextInput', span: 12, props:{ 'placeholder': '文本域', 'rows': 3}},
        ]
      }
    },
    watch: {},
    methods: {}
  }
</script>

<style lang="less">
</style>
