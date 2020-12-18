const PBULICFUNC = {
  // 获取近期时间,仅年份（前四年 num= -4）
  getDateYear_byNum(num) {
    let tmp_num = num || null;
    let DateVal = [];
    if (!tmp_num) {
      DateVal[0] = new Date().getFullYear();
    } else {
      for (let i = 0; i < Math.abs(tmp_num); i++) {
        DateVal.push({'paramNo': new Date().getFullYear() - i, 'paramName': (new Date().getFullYear() - i).toString()});
      }
    }
    return DateVal;
  },
  // 获取时间yyyy-mm-dd
  getDate_YMD(val) {
    if (!val) return '';
    let date = new Date(val);
    let dataVal = '';
    dataVal += date.getFullYear() + '-';
    date.getMonth() >= 9 ? dataVal += (date.getMonth() + 1) + '-' : dataVal += '0' + (date.getMonth() + 1) + '-';
    date.getDate() > 9 ? dataVal += (date.getDate()) + ' ' : dataVal += '0' + (date.getDate());
    return dataVal;
  },
  // 获取时间yyyy-mm-dd hh-mm-ss
  getDate_YMDHMS(val) {
    if (!val) return '';
    let date = new Date(val);
    let dataVal = '';
    dataVal += date.getFullYear() + '-';
    date.getMonth() >= 9 ? dataVal += (date.getMonth() + 1) + '-' : dataVal += '0' + (date.getMonth() + 1) + '-';
    date.getDate() > 9 ? dataVal += (date.getDate()) + ' ' : dataVal += '0' + (date.getDate());
    date.getHours() > 9 ? dataVal += (date.getHours()) + ':' : dataVal += '0' + (date.getHours()) + ':';
    date.getMinutes() > 9 ? dataVal += (date.getMinutes()) + ':' : dataVal += '0' + (date.getMinutes()) + ':';
    date.getSeconds() > 9 ? dataVal += (date.getSeconds()) : dataVal += '0' + (date.getSeconds());
    return dataVal;
  },
  // 当前时间 yyyy
  getNowDate_Y() {
    let date = new Date();
    let dataVal = '';
    dataVal += date.getFullYear();
    return dataVal;
  },
  // 当前时间 yyyy-mm-dd
  getNowDate_YMD() {
    let date = new Date();
    let dataVal = '';
    dataVal += date.getFullYear() + '-';
    date.getMonth() >= 9 ? dataVal += (date.getMonth() + 1) + '-' : dataVal += '0' + (date.getMonth() + 1) + '-';
    date.getDate() > 9 ? dataVal += (date.getDate()) + ' ' : dataVal += '0' + (date.getDate()) + ' ';
    return dataVal;
  },
  // 去重
  distinct (arr) {
    let result = [];
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      if (!obj[arr[i]]) {
        obj[arr[i]] = 1;
        result.push(arr[i]);
      }
    }
    return result;
  },
  // 深拷贝
  deepClone (obj) {
   let cloneObj = Array.isArray(obj) ? [] : {};
   if (obj && typeof obj === 'object') {
     for (let key in obj) {
       if (obj.hasOwnProperty(key)) {
         if (obj[key] && typeof obj[key] === 'object') {
           cloneObj[key] = this.deepClone(obj[key]);
         } else {
           cloneObj[key] = obj[key];
         }
       }
     }
   }
    return cloneObj;
  },
  // 防抖
  debounce(fn, time) {
    let timer = null;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.call(this)
      }, time)
    }
  },
  // 节流
  throttle(fn, time) {
    let last = null;
    return function () {
      let now = new Date().getTime();
      if (now - last >= time) {
        fn.call(this);
        last = now
      }
    }
  },
};

export default PBULICFUNC;
