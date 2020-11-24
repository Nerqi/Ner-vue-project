import axios from 'axios'
import { Notification } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: '', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 12000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.status !== 200 ) {
      const message = res.msg || res.message || '系统异常';
      Notification({
        message,
        type: 'error',
        duration: 5 * 1000
      });
      return Promise.reject(new Error(message))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error); // for debug
    Notification({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error)
  }
);
const request = params => {
  if (params.params){
    let newParams  = {};
    for (let i in params.params) {
      if (params.params[i] || params.params[i] === false || params.params[i] === 0) {
        newParams[i] = params.params[i]
      }
    }
    params.params = newParams
  }
  return new Promise((resolve, reject) => {
    service(params).then(res=>{
      resolve(res)
    }).catch(err=>{
      reject(err)
    })
  })
};

export default request
