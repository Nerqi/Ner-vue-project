const list1 = [
  {param_id: 10, param_name: '项目计划投资'},
  {param_id: 100, param_name: '年度计划投资'},
  {param_id: 110, param_name: '年度计划投资'},
];
const list2 = [
  {name: '终端', num: 20, total: 100, point: 20},
  {name: '终端', num: 30, total: 100, point: 30},
  {name: '终端', num: 40, total: 100, point: 40},
  {name: '终端', num: 50, total: 100, point: 50},
  {name: '终端', num: 80, total: 100, point: 80},
  {name: '终端', num: 90, total: 100, point: 90},
  {name: '终端', num: 100, total: 100, point: 100},
  {name: '终端', num: 20, total: 100, point: 20}
];
const list3 = {
    xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    yAxis: [120, 200, 150, 80, 70, 110, 130],
    legend: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    pie_data: [
      {value: 335, name: '直接访问'},
      {value: 310, name: '邮件营销'},
      {value: 234, name: '联盟广告'},
      {value: 135, name: '视频广告'},
      {value: 1548, name: '搜索引擎'}
    ]
};
const areaConfig = [
  {name:'昆明市',x:365,y:568, dec: '云南省'},
  {name:'曲靖市',x:430,y:568, dec: '云南省'},
  {name:'玉溪市',x:300,y:655, dec: '云南省'},
  {name:'昭通市',x:430,y:450, dec: '云南省'},
  {name:'临沧市',x:166,y:666, dec: '云南省'},
  {name:'保山市',x:66,y:622, dec: '云南省'},
  {name:'丽江市',x:234,y:488, dec: '云南省'},
  {name:'普洱市',x:244,y:702, dec: '云南省'},
  {name:'红河州',x:366,y:702, dec: '云南省'},
  {name:'德宏州',x:133,y:600, dec: '云南省'},
  {name:'楚雄州',x:288,y:568, dec: '云南省'},
  {name:'大理州',x:188,y:558, dec: '云南省'},
  {name:'文山州',x:488,y:678, dec: '云南省'},
  {name:'西双版纳州',x:222,y:788, dec: '云南省'},
  {name:'怒江州',x:133,y:500, dec: '云南省'},
  {name:'迪庆州',x:166,y:444, dec: '云南省'}
];

module.exports = [
  {
    url: '/fwjg/getlist1/wtq',
    type: 'get',
    response: () => {
      return {
        status: 200,
        list1: list1
      }
    }
  },
  {
    url: '/fwjg/getlist2/wtq',
    type: 'get',
    response: () => {
      return {
        status: 200,
        list2: list2
      }
    }
  },
  {
    url: '/fwjg/getlist3/wtq',
    type: 'get',
    response: () => {
      return {
        status: 200,
        list3: list3
      }
    }
  },
  {
    url: '/fwjg/getAreaConfig/wtq',
    type: 'get',
    response: () => {
      return {
        status: 200,
        areaConfig: areaConfig
      }
    }
  }
];
