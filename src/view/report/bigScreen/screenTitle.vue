<template>
  <div class="top_body">
    <div class="text1__body">云南省国产信息产品应用推广工作</div>
    <div class="text2__body">总体完成度<div class="value__body">88%</div></div>
    <div class="text2__body--icon" />
    <div class="text3__body">
      <span>距离工程结束</span>
      <span v-for="(item, key) in numList" :key="key" class="icon-s">{{ item }}</span>
      <span class="icon-text">天</span>
    </div>
    <div class="text4__body--time">
      <img :src="timeImg">
      <span class="text">{{ showTime }}</span>
    </div>
  </div>
</template>

<script>
  import timeImg from '@/assets/screen_images/time@3.png'
  export default {
    name: 'ScreenTitle',
    data() {
      return {
        time: '',
        timeImg
      }
    },
    computed: {
      showTime() {
        // return this.time
        return '2020-12-31 12:12:12'
      },
      numList() {
        return [0,3,7,6]
      },
    },
    created() {
      // this.timeInterval = setInterval(() => {
      //   this.refreshTime()
      // }, 1000)
    },
    beforeDestroy () {
      // clearInterval(this.timeInterval)
    },
    mounted(){
    },
    methods: {
      // refreshTime () {
      //   this.time = moment().format('YYYY.MM.DD.HH:mm:ss')
      // },
    },
  }
</script>
<style lang="less">
  @top : 25px;
  @font_title : 40px;
  @font_s_title : 25px;
  .top_body{
    position: relative;
    width: 100%;
    height: 100%;
    .text1__body{
      width: 1000px;
      font-size: @font_title;
      color: #FFFFFF;
      top: @top;
      text-align: center;
      margin-let: 0 auto;
      position: absolute;
    }
    .text2__body{
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      width: 245px;
      font-size: @font_s_title;
      color: #FFFFFF;
      top: @top;
      left: 1126px;
      position: absolute;
      .value__body{
        font-size: @font_title;
        margin-left: 20px;
      }
    }
    .text2__body--icon{
      position: absolute;
      top: @top;
      left: 1240px;
      width: 138px;
      height: 108px;
      font-weight: bold;
      background-image: url("~@/assets/screen_images/bianzu70@3.png");
      background-size: 100% 100%;
    }
    .text3__body{
      width: 445px;
      font-size: @font_s_title;
      color: #FFFFFF;
      top: @top;
      left: 1488px;
      display: flex;
      align-items: center;
      font-weight: bold;
      position: absolute;
      .icon-s{
        width: 48px;
        height: 48px;
        margin-left: 10px;
        background-image: url("~@/assets/screen_images/bianzu12.png");
        background-size: 100% 100%;
        font-size: @font_title;
        color: #CDE7FF;
        font-weight: bold;
        text-align: center;
      }
      .icon-text{
        margin-left: 10px;
      }
    }
    .text4__body--time{
      right: 16px;
      width: 268px;
      position: absolute;
      top: @top + 66;
      text-align: right;
      color: #CDE7FF;
      font-size: @font_s_title;
      img{
        width: 30px;
        position: absolute;
        left: 0;
      }
    }
  }

</style>
