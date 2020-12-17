import request from '@/utils/request'
const prefix = `/fwjg`;

export function getDictList(params) {
  return request({
    url: `${prefix}/dicList/wtq`,
    method: 'get',
    params
  })
}
