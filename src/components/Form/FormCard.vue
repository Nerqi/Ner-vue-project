<template>
  <el-form ref="form" class="form_body--card" style="position: relative"
           v-bind="computedConfig" :rules="rules" :model="data" v-if="reload">
    <el-row>
      <el-col v-for="(item, index) in computedItems" v-if="showComponent[item.prop]" :key="getItemKey(item, index)"
              :md="item.md" :sm="item.sm" :offset="item.offset" :span="item.span || 12">
        <div v-if="item.type === 'group'" class="form-group__header">{{ item.label }}</div>
        <el-form-item v-else :label="item.label + ' : '" :prop="item.prop">
          <render-content v-if="item.labelRender" slot="label" :render="item.labelRender" :data="item"/>
          <slot :name="item.slot" v-bind="{ item }">
            <component
              v-if="item.component !== 'Text'"
              :is="item.component"
              :ref="item.ref || `cp-${item.prop}`"
              v-model="data[item.prop]"
              :data="data"
              v-bind="item.props"
              v-on="item.listeners"
            />
            <span v-else>{{ data[item.prop] }}</span>
          </slot>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
<script lang="jsx">
  import {cloneDeep} from 'lodash'
  const defaultConfig = {
    labelWidth: '90px'
  };
  // 表单字段格式化
  const RenderContent = {
    props: {
      render: Function,
      formatter: Function, // 格式化数据
      data: Object,
      prop: String
    },
    render (h) {
      if (this.render) {
        return this.render(h, this.data)
      }
      let value = this.data[this.prop];
      if (this.formatter) {
        value = this.formatter(value, this.data)
      }
      return <span>{value}</span>
    }
  };
  // element UI 组件
  const alias = {
    Input: {
      component: 'Input',
      props: {}
    },
    SelectDefault: {
      component: 'SelectDefault',
      props: {}
    },
    DictSelect: {
      component: 'DictSelect',
      props: {}
    },
    SelectService: {
      component: 'SelectService',
      props: {}
    },
    SelectTreeService: {
      component: 'SelectTreeService',
      props: {}
    },
    Label: {
      component: 'render-content',
      props: {}
    },
    BaseEditor: {
      component: 'BaseEditor',
      props: {}
    },
  };

  export default {
    name: 'FormCard',
    components: {
      RenderContent
    },
    data() {
      return {
        reload: true, // 强制刷新
        showComponent:{}
      }
    },

    props: {
      formConfig: {
        type: Object,
        default: ()=>{
          return {
            labelWidth: '90px'
          }
        }
      },
      formItems: Array,// 表单详情（字段，名称，prop, 组件类型，布局, rules{}, props:{disabled,placeholder}，url,listeners(监听子组件的事件)等）
      // group: Array,
      data: Object, // 绑定的表单总属性
      readOnly:{ // 是否只读
        type: Boolean,
        default: false
      }
    },
    created(){
      for (const item of this.formItems) { // 初始化，表单中各个属性是否可显示
        let {  prop } = item;
        this.showComponent[prop] = true
      }
    },
    computed: {
      computedConfig () {
        return {
          ...defaultConfig, // labelWidth: '120px'
          ...this.formConfig
        }
      },
      computedItems () {
        const itemResult = [];
        for (const item of this.formItems) {
          let { component = 'Input', showIf, prop, props, ...theArgs } = item;
          // if (typeof showIf === 'function' && !showIf(this.data)) {
          //     continue
          // }
          // if (typeof props === 'function') {
          //     props = props(this.data)
          // }
          if (component === 'Label') {
              props = {
                  ...props,
                  data: this.data,
                  prop
              }
          }
          if (alias[component]) {
            props = {
              ...alias[component].props,
              ...props
            };
            component = alias[component].component
          }
          itemResult.push({
            component, // 组件类型
            prop, // 表单规则指向
            props, // 传参
            ...theArgs // 其余传参
          })
        }
        return itemResult
      },
      rules () {
        let rules = this.computedItems.reduce((total, item) => {
          if (item.rules) {
            let rules = item.rules;
            if (typeof rules === 'function') {
              rules = rules(this.data)
            }
            total[item.prop] = rules
          }
          return total
        }, {});
        return rules
      },
      computedThisForm() { // 深克隆表单，强制更新
        const a = cloneDeep(this.data);
        return JSON.stringify(a)
      }
    },
    watch: {
      computedThisForm:{ // 监控表单变化
        handler(newValue,oldValue) {
          this.$emit('updataFormData',JSON.parse(newValue),JSON.parse(oldValue))
        },
        deep: true
      },
    },
    methods: {
      methodThatForcesUpdate(prop) {
        if(prop){
          this.showComponent[prop]=false;
          this.$nextTick(()=>{
            this.showComponent[prop]=true;
            this.$forceUpdate();
            this.clearValidate()
          })
        }else {
          this.reload=false;
          this.$nextTick(()=>{
            this.reload = true
          })
        }
      },
      getItemKey (item, index) {
        return `${item.prop}-${index}`
      },
      validate () {
        return new Promise(resolve => {
          this.$refs.form.validate(resolve)
        })
      },
      clearValidate (props) { // 清空校验
        this.$refs.form.clearValidate(props)
      }
    }
  }
</script>
<style lang="less">
  .form_body--card{
    .mask{
      z-index: 2;
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .form-group__header{
      width: 100%;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      height: 40px;
      line-height: 40px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
    }
  }
</style>

