<template>
  <div class="preview-screen_body">
    <div class="bg--zgc">
      <DataScreen>
        <BigScreenContent></BigScreenContent>
      </DataScreen>
    </div>
  </div>
</template>

<script>
  import BigScreenContent from "./bigScreenContent";
  export default {
    name: 'bigScreen',
    components:{BigScreenContent},
    data() {
      return {}
    },
    computed: {},
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
