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
  return request({
    url: `${prefix}/user/info/wtq`,
    method: 'get',
    params: { token }
  })
}
export function logout(token) {
  return request({
    url: `${prefix}/logout/wtq`,
    method: 'post',
    data:{
      userId: token
    }
  })
}
