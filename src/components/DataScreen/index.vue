<template>
  <div class="sugar-root" ref="echartsWrapper">
    <div class="popMenu-wrapper">
      <div class="dashboard-share-container reportOrDashBackColor" style="background-color: #eeeeee; overflow: hidden;">
        <div class="dashboard-share-background-image reportOrDashBackImg" :style="`background: ${dashboardBackgroundStyle} ${marginLeft}px top / ${100*boxWidthPercent}% 100%`"></div>
        <div :style="`margin: 0  ${marginLeft}px`">
          <div style="position: relative">
            <div class="dashboard-container can-cancel-chart-target" :style="`width: ${width}px; height:${height}px; transform: scale(${scale}, ${scale}); ${backgroundImage?'':'box-shadow:none'}`">
              <div class="dashboard-background-image can-cancel-chart-target" :style="`background: ${dashboardBackgroundStyle} 0% 0% / 100% 100%;`"></div>
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {debounce} from './utils'

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
      },
      backgroundImage: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        $_sidebarElm: null,
        sugarRootWidth: 0,
        sugarRootHeight: 0,
      }
    },
    computed: {
      lengthWidthRatio(){
        return  this.width/this.height
      },
      marginLeft() {
        let res = (this.sugarRootWidth - this.sugarRootHeight * this.lengthWidthRatio) / 2;
        return res > 0 ? res:0
      },
      boxWidthPercent() {
        return this.sugarRootHeight * this.lengthWidthRatio/this.sugarRootWidth
      },
      scale() {
        return this.sugarRootHeight/this.height
      },
      dashboardBackgroundStyle(){
        return  `url('${this.backgroundImage}')`
      }
    },
    mounted() {
      this.sugarRootHeight = this.$refs.echartsWrapper.clientHeight;
      this.sugarRootWidth = this.$refs.echartsWrapper.clientWidth;
      // this.__resizeHandler = debounce(() => {
      //   this.sugarRootHeight = this.$refs.echartsWrapper.clientHeight;
      //   this.sugarRootWidth = this.$refs.echartsWrapper.clientWidth
      // }, 100);
      // window.addEventListener('resize', this.__resizeHandler);
      this.$_sidebarElm = document.getElementsByClassName('sidebar-container')[0];
      this.$_sidebarElm && this.$_sidebarElm.addEventListener('transitionend', this.$_sidebarResizeHandler)
    },
    beforeDestroy() {
     // window.removeEventListener('resize', this.__resizeHandler);
      this.$_sidebarElm && this.$_sidebarElm.removeEventListener('transitionend', this.$_sidebarResizeHandler)
    },
    methods: {
      $_sidebarResizeHandler(e) {
        if (e.propertyName === 'width') {
          this.__resizeHandler()
        }
      }
    }
  }
</script>

<style lang="less">
  .sugar-root{
    height: 100%;
    width: 100%;
    position: relative;
    .popMenu-wrapper{
      height: 100%;
      width: 100%;
      position: relative;
      .dashboard-share-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        .dashboard-share-background-image{
          filter: blur(0px);
          width: 100%;
          height: 100%;
          position: absolute;
          opacity: 1;
        }
        .dashboard-container {
          position: relative;
          user-select: none;
          width: 100%;
          height: 100%;
          transform-origin: 0 0;
          box-shadow: 0 0 10px 0 rgba(0,0,0,.5);
          transition: all .3s linear;
          overflow: hidden;
          .dashboard-background-image {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: -1;
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }
</style>
