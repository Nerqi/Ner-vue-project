import request from '@/utils/request'
const prefix = `/fwjg`;

export function getlist1(params) {
  return request({
    url: `${prefix}/getlist1/wtq`,
    method: 'get',
    params
  })
}
export function getlist2(params) {
  return request({
    url: `${prefix}/getlist2/wtq`,
    method: 'get',
    params
  })
}
export function getlist3(params) {
  return request({
    url: `${prefix}/getlist3/wtq`,
    method: 'get',
    params
  })
}
export function getAreaConfig(params) {
  return request({
    url: `${prefix}/getAreaConfig/wtq`,
    method: 'get',
    params
  })
}
