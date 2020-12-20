<template>
  <div class="content1_body">
    <TitleCell title="项目总投资金额" />
    <img :src="mapImg" class="map__body">
    <span v-for="(item, key) in areaConfig" :key="key" class="text__body"
      :class="item.isActive ? 'text__body--active': ''"
      :style="`top: ${item.y}px; left: ${item.x}px;`" @click.stop="clickText(item, key)">{{ item.name }}</span>
    <div class="tanchuang__body" :style="tanchuangstyle">
      <span>{{tmp_area.dec}}--{{tmp_area.name}}</span>
    </div>
  </div>
</template>

<script>
  import { getAreaConfig } from '@api/report'
  import mapImg from '@/assets/screen_images/map@3.png'
  import TitleCell from './TitleCell'
  export default {
    name: 'Content1',
    components:{
      TitleCell
    },
    data() {
      return {
        mapImg,
        tmp_area: {},
        areaConfig:[],
      }
    },
    computed: {
      tanchuangstyle() {
        return {
          left: this.tmp_area.x + 40 + 'px',
          top: this.tmp_area.y + 20 + 'px',
        }
      }
    },
    created(){
      this.getData()
    },
    methods: {
      clickText(item,key) {
        this.areaConfig = this.areaConfig.map((item, index)=>{
          let isActive = index === key;
          return{
            ...item,
            isActive
          }
        });
        this.tmp_area = item;
      },
      async getData  (){
        let { areaConfig : areaConfig } = await getAreaConfig();
        this.areaConfig = areaConfig;
        let currentIndex = 0;
        this.clickText(this.areaConfig[currentIndex],currentIndex);
        setInterval(() =>{
          currentIndex = currentIndex + 1;
          if(currentIndex === 15){ currentIndex = 0 }
          this.clickText(this.areaConfig[currentIndex],currentIndex)
        }, 3000);
      }
    },
  }
</script>

<style lang="less">
  .content1_body{
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    .map__body{
      position: absolute;
      width: 80%;
      height: 468px;
      left: 50px;
      bottom: 0
    }
    .text__body{
      position: absolute;
      color: #FFFFFF;
      font-size : 16px;
      &:hover{
        color: #00ff00;
        cursor: pointer;
      }
    }
    .tanchuang__body{
      position: absolute;
      padding: 10px;
      background-image: url("~@/assets/screen_images/tanChuang@3.png");
      background-size: 100% 100%;
      color:  #00ff00;
    }
    .text__body--active{
      color: #00ff00;
    }
  }

</style>
