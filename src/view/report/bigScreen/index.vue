<template>
  <div class="preview-screen_body">
    <div class="bg--zgc">
      <DataScreen :width="6720" :height="3780" :background-image="backgroundImage">王天琪</DataScreen>
    </div>
  </div>
</template>

<script>
  import backgroundImage from '@/assets/screen_images/bg@3.png'
  export default {
    name: 'bigScreen',
    components:{},
    data() {
      return {}
    },
    computed: {
      backgroundImage() {
        return backgroundImage
      }
    },
    watch: {},
    methods: {}
  }
</script>

<style lang="less">
  .preview-screen_body{
    width:100%;
    height: 100%;
    .bg--zgc{
      width:100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-image: url("~@/assets/screen_images/bjjx@2x.png");
    }
  }
</style>
