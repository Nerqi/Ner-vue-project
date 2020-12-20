<template>
  <div>
    <PageCard>
      <div slot="header">数据大屏</div>
      <div slot="rightHeader"> <el-button @click="goto()">跳转到大屏</el-button></div>
      <div class="main-screen_body">
        <DataScreen>
          <BigScreenContent></BigScreenContent>
        </DataScreen>
      </div>
    </PageCard>
  </div>
</template>

<script>
  import BigScreenContent from "../bigScreen/bigScreenContent";
  export default {
    name: 'screen',
    components:{BigScreenContent},
    data() {
      return {}
    },
    watch: {},
    mounted() {},
    methods: {
      goto() {
        this.$router.push({name:'bigScreen'})
      }
    }
  }
</script>

<style lang="less">
  .main-screen_body{
    width: 1344px;
    height: 756px;
  }
</style>
