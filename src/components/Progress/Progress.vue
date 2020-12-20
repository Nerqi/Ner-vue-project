<template>
  <el-progress
    class="progress__body"
    color="#18DBFD"
    :text-inside="true"
    :show-text="false"
    :stroke-width="strokeWidth"
    :percentage="computedpercentage"></el-progress>
</template>

<script>
export default {
  name: 'Progress',
  props: {
    percentage: {
      type: [Number,String] ,
      default: 0
    }
    ,
    strokeWidth: {
      type: Number,
      default: 8
    }
  },
  computed: {
    computedpercentage() {
      return parseFloat(this.percentage)
    }
  }
}
</script>

<style lang="less">
.progress__body{
  .el-progress-bar__outer{
    background-color: #1F3381!important;
  }
}

</style>
