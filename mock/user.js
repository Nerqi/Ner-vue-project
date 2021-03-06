const menuList = [
  {
    "menuId": 1,
    "appMenuName": "系统管理",
    "menuType": "1",
    "icon": "el-icon-edit",
    "url": "/system",
    "menuCode": "system",
    "redirect": '/404',
    "children": [
    //   {
    //   "menuId": 1.1,
    //   "appMenuName": "用户管理",
    //   "menuType": "2",
    //   "parentId": 1,
    //   "path": "system/userManager",
    //   "icon": "el-icon-share",
    //   "url": "/system/userManager",
    //   "menuCode": "userManager"
    // },
    //   {
    //     "menuId": 1.2,
    //     "appMenuName": "组织管理",
    //     "menuType": "2",
    //     "parentId": 1,
    //     "path": "system/orgManager",
    //     "icon": "el-icon-share",
    //     "url": "/system/orgManager",
    //     "menuCode": "orgManager"
    //   },
      {
        "menuId": 1.3,
        "appMenuName": "配置化表单",
        "menuType": "2",
        "parentId": 1,
        "path": "system/formConfig",
        "icon": "el-icon-share",
        "url": "/system/formConfig",
        "menuCode": "formConfig"
      }]
  },
  {
    "menuId": 2,
    "appMenuName": "报表管理",
    "menuType": "1",
    "icon": "el-icon-edit",
    "url": "/report",
    "menuCode": "report",
    "redirect": '/404',
    "children": [
      {
        "menuId": 2.1,
        "appMenuName": "数据大屏",
        "menuType": "2",
        "parentId": 1,
        "path": "report/screen",
        "icon": "el-icon-star-on",
        "url": "/report/screen",
        "menuCode": "Screen"
      }
    ]
  }
];

const tokens = {
  token: 'admin-token'
};

const users = {
  roles: ['admin'],
  introduction: 'I am a super administrator',
  avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  name: 'admin',
  staff_id : 1,
  menuList: menuList
};

module.exports = [
  {
    url: '/fwjg/userController/login/token',
    type: 'post',
    response: () => {
      return {
        status: 200,
        info: tokens
      }
    }
  },
  {
    url: '/fwjg/user/info/wtq',
    type: 'get',
    response: () => {
      return {
        status: 200,
        info: users
      }
    }
  },
  {
    url: '/fwjg/logout/wtq',
    type: 'post',
    response: () => {
      return {
        status: 200
      }
    }
  }
];
