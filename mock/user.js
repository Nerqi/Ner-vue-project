const menus = [];

const tokens = {
  admin: {
    token: 'admin-token'
  }
};

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
    menus
  }
};

module.exports = [
  {
    url: '/fwjg/userController/login/token',
    type: 'post',
    response: config => {
      const token = tokens['admin'];
      return {
        status: 200,
        info: token
      }
    }
  }
];
