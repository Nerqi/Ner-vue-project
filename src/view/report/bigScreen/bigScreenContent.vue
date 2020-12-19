<template>
  <div class="screen_body">
    <div class="screen_title">
      <ScreenTitle></ScreenTitle>
    </div>
    <div class="screen_main">
      <div class="left__body">
        <Left1></Left1>
      </div>
      <div class="content__body">
        <content1></content1>
      </div>
      <div class="right__body">
        <Right1></Right1>
      </div>
    </div>
  </div>
</template>

<script>
  import ScreenTitle from "./screenTitle";
  import Left1 from "./left1";
  import Content1 from "./content1";
  import Right1 from "./right1";
  export default {
    name: 'BigScreenContent',
    components:{ScreenTitle, Left1, Right1, Content1},
    data() {
      return {}
    },
    computed: {},
    watch: {},
    methods: {}
  }
</script>

<style lang="less">
  .screen_body{
    .screen_title{
      height: 170px;
      opacity: 0.9;
    }
    .screen_main{
      display: flex;
      .left__body{
        width: 468px;
        height: 860px;
        margin-left: 66px;
        padding: 10px;
      }
      .content__body{
        width: 700px;
        height: 860px;
        margin-left: 50px;
        padding: 10px;
      }
      .right__body{
        width: 468px;
        height: 860px;
        margin-left: 45px;
        padding: 10px;
      }
    }
  }
</style>
