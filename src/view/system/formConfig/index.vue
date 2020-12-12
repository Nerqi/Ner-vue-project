<template>
  <div>
    <PageCard header="配置化表单">
      <FormCard ref="FormCard" :form-items="formItems"  :form-config = formConfig :data="form"></FormCard>
    </PageCard>
  </div>
</template>

<script>
  export default {
    name: 'formConfig',
    components:{},
    data() {
      return {
        // 主Form
        form: {
          name: 'name',
          llll: 'llll'
        },
        formConfig: {
          labelWidth: '90px'
        },
        // 配置化表单
        formItems:[
          { type: 'group', label: '基础信息', span: 24},
          { label: '名称', prop: 'name', component: 'Input', span: 6},
          { label: '名称', prop: 'name', component: 'Input', span: 6},
          { label: '名称', prop: 'name', component: 'Input', span: 6},
          { label: '姓名', prop: 'llll', component: 'Label', span: 6}
        ]
      }
    },
    watch: {},
    methods: {}
  }
</script>

<style lang="less">
</style>
