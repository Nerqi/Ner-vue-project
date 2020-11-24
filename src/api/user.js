import request from '@/utils/request'
const prefix = `/fwjg`;

export function login(data) {
  const { username, password} = data;
  return request({
    url: `${prefix}/userController/login/token`,
    method: 'post',
    data:{
      userCode :username,
      password :password,
    }
  })
}
export function getInfo(token) {
  // return request({
  //   url: `${prefix}/user/info`,
  //   method: 'get',
  //   params: { token }
  // })
}
export function logout(token) {
  // return request({
  //   url: `${prefix}/userController/logout`,
  //   method: 'post',
  //   data:{
  //     userId:token
  //   }
  // })
}
