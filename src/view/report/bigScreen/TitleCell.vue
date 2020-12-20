<template>
  <div class="title-card__body">
    <img :src="titleImg1">
    <span>{{ title }}</span>
    <img :src="titleImg2">
  </div>
</template>

<script>
  import titleImg1 from '@/assets/screen_images/titleImg1.png'
  import titleImg2 from '@/assets/screen_images/titleImg2.png'
  export default {
    name: 'TitleCard',
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data() {
      return{
        titleImg1,
        titleImg2
      }
    }
  }
</script>

<style lang="less">
  .title-card__body{
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
    span{
      color: #FFFFFF;
      font-size: 20px;
    }
  }

</style>
