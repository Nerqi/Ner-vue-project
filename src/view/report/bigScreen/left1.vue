<template>
  <div class="left1_body">
    <TitleCell title="项目总投资金额" />
  </div>
</template>

<script>
  import TitleCell from './TitleCell'
  export default {
    name: 'Left1',
    components:{
      TitleCell
    },
    data() {
      return {}
    },
    created(){},
    methods: {},
  }
</script>

<style lang="less">
  .left1_body{
    position: relative;
    width: 100%;
    height: 100%;
  }

</style>
