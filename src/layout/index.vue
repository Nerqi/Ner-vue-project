<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
    <component :is="componentName" />
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
  import { Navbar, Sidebar, AppMain } from './components'
  import defaultSettings from '@/settings'
  import ResizeMixin from './mixin/ResizeHandler'
export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    fixedHeader() {
      return defaultSettings.fixedHeader
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened, // 隐藏
        openSidebar: this.sidebar.opened, // 展开
        withoutAnimation: this.sidebar.withoutAnimation, // 动画
        verticalSidebar: this.sidebar.mode === 'horizontal', //
        mobile: this.device === 'mobile', //
      }
    },
    componentName() {
      return this.sidebar.mode === 'vertical' ? 'Sidebar': 'HorizontalSidebar'
    }
  },
  created(){},
  methods: {
    // 关闭侧边栏
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="less">
  @import "~@/styles/mixin.less";
  @import "~@/styles/variables.less";
  .app-wrapper {
  @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - 200px);
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
