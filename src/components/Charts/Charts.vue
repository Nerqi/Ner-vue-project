<template>
  <div :id="id" :style="{'height': height,'width': width}"></div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: 'Charts',
    props: {
      chartType: {
        type: String,
        default: 'chart'
      },
      id: {
        type: String,
        default: 'chart'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '100%'
      },
      chartData:{
        type: Object,
        default: ()=>{
          return{}
        }
      }
    },
    data () {
      return {
        chart: null
      }
    },
    watch: {
    },
    mounted() {
      this.initChart()
    },
    methods: {
      get_chartType_bar() {
        this.chart.setOption({
          tooltip: {
            trigger: 'axis',
            textStyle:{
              fontSize: 18
            },
            axisPointer: {
              type: 'shadow',
              textStyle: {
                color: "#fff"
              },
            }
          },
          grid: {
            left: '0',
            right: '0',
            bottom: '0',
            top: '20px',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: this.chartData.xAxis,
            axisLine: {
              lineStyle: {
                color: 'white',
                width: 1
              }
            },
            axisLabel: {
              textStyle: {
                fontFamily: 'Microsoft YaHei',
                fontSize: 10
              }
            },
          },
          yAxis: {
            type: 'value',
            axisLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: 'white',
                fontSize: 10
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(255,255,255,0.3)'
              }
            },
            axisLabel: {
              textStyle: {
                fontFamily: 'Microsoft YaHei',
                fontSize: 10,
              }
            }
          },
          series: [{
            data: this.chartData.yAxis,
            type: 'bar',
            barWidth: '28%',
            showBackground: true,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#fccb05'
                }, {
                  offset: 1,
                  color: '#f5804d'
                }]),
                barBorderRadius: 12,
              },
            },
          }]
        })
      },
      get_chartType_pie() {
        this.chart.setOption({
          color:['#2359E0','#AFD7DE','#3581E1','#EBA115','#D3DA1C','#4CF1EF','#5CDE9F',],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            icon: "circle",
            size: 20,
            show: true, // 图例不显示
            orient: 'vertical',
            left: 10,
            data: this.chartData.legend,
            textStyle: {
              fontSize: 12,
              fontWeight: 200,
              color:'rgba(196,202,243,1)'
            },
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: [58, 88],//内外半径尺寸
              avoidLabelOverlap: false,
              label:{
                normal:{ //指示
                  formatter:'{b}\n{d}%',
                  textStyle:{
                    fontSize: 10,
                    color:'#fff'
                  }
                },
              },
              labelLine:{
                normal:{
                  length: 5,  // 改变标示线的长度
                  lineStyle: {
                    width: 2,
                    color: "#fff"  // 改变标示线的颜色
                  }
                },
              },
              data: this.chartData.pie_data
            }
          ]
        })
      },
      initChart() {
        this.chart = echarts.init(document.getElementById(this.id));
        if (this.chartType === 'bar') {
          this.get_chartType_bar()
        }
        if (this.chartType === 'pie') {
          this.get_chartType_pie()
        }
      }
    }
  }
</script>

<style lang="less">
</style>
