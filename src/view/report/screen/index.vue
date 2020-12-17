<template>
  <div>
    <PageCard header="数据大屏">
      <el-button @click="goto(item)">跳转到大屏</el-button>
    </PageCard>
  </div>
</template>

<script>
  export default {
    name: 'screen',
    components:{},
    data() {
      return {}
    },
    watch: {},
    methods: {
      goto() {
        this.$router.push({name:'bigScreen'})
      }
    }
  }
</script>

<style lang="less">
</style>
