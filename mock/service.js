const dicList = [
  {param_id: 1, param_name: 'param_name1'},
  {param_id: 2, param_name: 'param_name2'},
  {param_id: 3, param_name: 'param_name3'},
  {param_id: 4, param_name: 'param_name4'}
];
const selectList = [
  {select_id: 1, select_name: 'select_name1'},
  {select_id: 2, select_name: 'select_name2'},
  {select_id: 3, select_name: 'select_name3'},
  {select_id: 4, select_name: 'select_name4'}
];
const treeSelectList = [
  {
    tree_label:'tree选项1',
    tree_value: 1,
    children: [
      {
        tree_label:'tree选项1-1',
        tree_value: 11
      },
      {
        tree_label:'tree选项1-2',
        tree_value: 12
      }
    ]
  },
  {
    tree_label:'tree选项2',
    tree_value: 2
  }
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
  },
  {
    url: '/fwjg/selectList/wtq',
    type: 'get',
    response: () => {
      return {
        status: 200,
        selectList: selectList
      }
    }
  },
  {
    url: '/fwjg/treeSelectList/wtq',
    type: 'get',
    response: () => {
      return {
        status: 200,
        treeSelectList: treeSelectList
      }
    }
  }
];
