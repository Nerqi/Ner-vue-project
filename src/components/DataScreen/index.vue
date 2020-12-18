<template>
  <div class="sugar-root" ref="echartsWrapper">
    <div class="popMenu-wrapper">
      <div class="dashboard-share-container" style="background-color: #eeeeee; overflow: hidden;">
        <div class="dashboard-share-background-image" :style="`background: ${dashboardBackgroundStyle} ${marginLeft}px  / ${100*boxWidthPercent}% 100%`"></div>
        <div :style="`margin: 0  ${marginLeft}px`">
          <div class="dashboard-container" :style="`width: ${width}px; height: ${height}px; transform: scale( ${scale}, ${scale})`">
            <div class="dashboard-background-image" :style="`background: ${dashboardBackgroundStyle} 0% 0% / 100% 100%;`"></div>
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import backgroundImage from '@/assets/screen_images/bg@3.png'
  export default {
    name: "DataScreen",
    components:{},
    props: {
      width: {
        type: Number,
        default: 1920
      },
      height: {
        type: Number,
        default: 1080
      }
    },
    data() {
      return {
        $_sidebarElm: null,
        clientWidth: 0,
        clientHeight: 0,
      }
    },
    computed: {
      // 预设宽高比
      lengthWidthRatio(){
        return  this.width / this.height
      },
      // ( 可见宽度 - （可见高度 * 预设宽高比） / 2 )
      marginLeft() {
        let res = (this.clientWidth - this.clientHeight * this.lengthWidthRatio) / 2;
        return res > 0 ? res : 0
      },
      // 可见高度 * 预设宽高比 / 可见宽度
      boxWidthPercent() {
        return this.clientHeight * this.lengthWidthRatio / this.clientWidth
      },
      // 放大缩小的比例，可见高度/预设高度
      scale() {
        return this.clientHeight / this.height
      },
      // 获取大屏背景图
      dashboardBackgroundStyle(){
        return  `url('${backgroundImage}')`
      }
    },
    mounted() {
      this.clientHeight = this.$refs.echartsWrapper.clientHeight; // 网页可见区域高
      this.clientWidth = this.$refs.echartsWrapper.clientWidth; // 网页可见区域宽
      this.__resizeHandler = this.$publicFunc.debounce(() => {
        this.clientHeight = this.$refs.echartsWrapper.clientHeight;
        this.clientWidth = this.$refs.echartsWrapper.clientWidth
      }, 1000);
      window.addEventListener('resize', this.__resizeHandler);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.__resizeHandler);
    },
    methods: {}
  }
</script>

<style lang="less">
  .sugar-root{
    height: 100%;
    width: 100%;
    .popMenu-wrapper{
      height: 100%;
      width: 100%;
      .dashboard-share-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        .dashboard-share-background-image{
          filter: blur(0px); // 清晰度（越大越不清晰）
          width: 100%;
          height: 100%;
          position: absolute;
          opacity: 1; // 透明度（1完全不透明）
        }
        .dashboard-container {
          user-select: none; // 文本不能被选择
          width: 100%;
          height: 100%;
          transform-origin: 0 0; // 基点位置（左上角）
          transition: all 0.3s 0s linear; // all所有的css属性都拥有过渡，过渡时间为0.3s，延迟0s触发动画，执行匀速触发函数
          .dashboard-background-image {
            width: 100%;
            height: 100%;
            filter: blur(0px); // 清晰度（越大越不清晰）
            opacity: 1; // 透明度（1完全不透明）
          }
        }
      }
    }
  }
</style>
