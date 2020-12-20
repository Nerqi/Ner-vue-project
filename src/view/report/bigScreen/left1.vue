<template>
  <div class="left1_body">
    <TitleCell title="项目总投资金额" />
    <div class="body">
      <div class="left-cell--small" v-for="(item ,index) of list1" :key="index">
        <div class="lcs--icon">{{item.param_id}}亿</div>
        <div class="lsc--text">{{item.param_name}}</div>
      </div>
      <div class="right-cell">
        <div class="value-cell">110亿</div>
        <div class="value-icon-cell"></div>
      </div>
    </div>
    <TitleCell title="集成商项目数和中标金额数" />
    <Charts v-if="ifshow" :id="'chart1'" :height="'210px'" :chartType="'bar'" :chartData="chart_obj"></Charts>
    <TitleCell title="项目国产化数量及进度" />
    <div class="card__body">
      <div class="value__body"  v-for="(item ,index) of list2" :key="index">
        <div class="value__body--value">
          <div class="left-text">{{item.name}} {{item.num}}%</div>
          <div class="right-value">{{item.total}}</div>
        </div>
        <Progress :percentage="item.point"></Progress>
      </div>
    </div>
    <TitleCell title="各厂家技术路线占比" />
    <Charts v-if="ifshow" :id="'chart2'" :height="'188px'" :chartType="'pie'" :chartData="chart_obj"></Charts>
  </div>
</template>

<script>
  import { getlist1, getlist2, getlist3 } from '@api/report'
  import TitleCell from './TitleCell'
  export default {
    name: 'Left1',
    components:{
      TitleCell
    },
    data() {
      return {
        list1 : [],
        list2 : [],
        chart_obj : {},
        ifshow: false
      }
    },
    mounted(){
      this.getList1();
      this.getList2();
      this.getList3()
    },
    methods: {
      async getList1() {
        let { list1 : list1 } = await getlist1();
        this.list1 = list1
      },
      async getList2() {
        let { list2 : list2 } = await getlist2();
        this.list2 = list2
      },
      async getList3() {
        let { list3 : list3 } = await getlist3();
        this.chart_obj = list3;
        this.ifshow = true
      }
    },
  }
</script>

<style lang="less">
  .left1_body{
    position: relative;
    width: 100%;
    height: 100%;
    .body{
      margin-top: 10px;
      display: flex;
      justify-content: space-around;
      .left-cell--small{
        .lcs--icon{
          width: 88px;
          height: 78px;
          background-image: url("~@/assets/screen_images/bianzu5@2.png");
          background-size: 100% 100%;
          font-size: 16px;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lsc--text{
          text-align: center;
          margin-top: 10px;
          font-size: 12px;
          color: #C4CAF3;
        }
      }
      .right-cell{
        .value-cell{
          height: 60px;
          width: 120px;
          background-image: url("~@/assets/screen_images/baifang2@3.png");
          background-size: 100% 100%;
          font-size: 20px;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .value-icon-cell{
          background-image: url("~@/assets/screen_images/baifang@3.png");
          height: 60px;
          width: 110px;
          background-size: 100% 100%;
        }
      }
    }
    .card__body{
      height: 166px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .value__body{
        .value__body--value{
          width: 200px;
          display: flex;
          justify-content: space-between;
          color: #FFFFFF;
          font-size: 10px;
          margin-top: 10px;
          margin-bottom: 5px;
        }
      }
    }
  }

</style>
