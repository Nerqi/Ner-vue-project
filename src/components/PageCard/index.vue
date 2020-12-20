<template>
  <div class="page-card__body">
    <el-card body-style="padding: 0" shadow="never">
      <div v-if="$slots.header || header" slot="header" style="display: flex;align-items: center">
        <div class="lalal-color" style="width: 10px;height: 10px;margin-right: 5px"/>
        <div class="page-card-header">
          <div>
            <slot name="header">
              {{ header }}
            </slot>
          </div>
          <div>
            <slot name="rightHeader"></slot>
          </div>
        </div>
      </div>
      <div class="height100" style="padding: 15px 15px;min-height: 300px;position: relative">
        <slot />
      </div>
      <div v-if="$slots.footer || footer" style="padding: 15px 15px;border-top: 1px solid #EBEEF5;">
        <slot name="footer">
          {{ footer }}
        </slot>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'pageCard',
  props: {
    header:{
      type:String,
      default:()=>{
        return ''
      }
    },
    footer:{
      type:String,
      default:()=>{
        return ''
      }
    },
  }
};
</script>
<style lang="less">
@import "~@/styles/element-variables.less";
.page-card__body{
  .page-card-header{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .height100{
    max-height: calc(~'100vh - 200px');
    overflow-y: auto;
  }
  .lalal-color{
    background-color: @--color-primary;

  }
  .el-card__header{
    padding:15px 15px ;
    font-size: 16px;

  }
}


</style>
