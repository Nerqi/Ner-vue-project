const menuList = [
  {
    "menuId": 1053,
    "appMenuName": "个人信息管理",
    "menuType": "1",
    "parentId": 1020,
    "path": "redirectIndex",
    "icon": "app",
    "url": "/info",
    "menuOrder": 10,
    "menuCode": "myInfo",
    "isShow": "0",
    "status": "1",
    "children": [{
      "menuId": 1054,
      "appMenuName": "个人密码修改",
      "menuType": "1",
      "parentId": 1053,
      "path": "userinfo/MyPassword",
      "icon": "suo",
      "url": "/Mypassword",
      "menuOrder": 1,
      "menuCode": "MyPassword",
      "isShow": "1",
      "status": "1"
    }]
  },
  {
    "menuId": 1023,
    "appMenuName": "系统字典",
    "menuType": "1",
    "parentId": 1020,
    "path": "system/dictionary/index",
    "icon": "database",
    "url": "/system/dictionary",
    "menuOrder": 7,
    "menuCode": "Dictionary",
    "isShow": "1",
    "status": "1"
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
  menuList
};

module.exports = [
  {
    url: '/fwjg/userController/login/token',
    type: 'post',
    response: config => {
      return {
        status: 200,
        info: tokens
      }
    }
  },
  {
    url: '/fwjg/user/info/wtq',
    type: 'get',
    response: config => {
      return {
        status: 200,
        info: users
      }
    }
  }
];
