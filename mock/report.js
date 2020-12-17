const dicList = [
  {param_id: 1, param_name: 'param_name1'},
  {param_id: 2, param_name: 'param_name2'},
  {param_id: 3, param_name: 'param_name3'},
  {param_id: 4, param_name: 'param_name4'}
];

module.exports = [
  {
    url: '/fwjg/dicList/wtq',
    type: 'get',
    response: () => {
      return {
        status: 200,
        dicList: dicList
      }
    }
  }
];
