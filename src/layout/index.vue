<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>>
    <!--    <sidebar  />-->
    <component :is="componentName" />
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
<!--        <navbar />-->
      </div>
<!--      <app-main />-->
    </div>
  </div>
</template>

<script>
  import { Sidebar } from './components'
  import defaultSettings from '@/settings'
export default {
  name: 'Layout',
  components: {
    Sidebar
  },
  mixins: [],
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
</style>
