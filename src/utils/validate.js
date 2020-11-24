/**
 *判断是否存在且为数组切长度大于1
 */
export const isArray = arr => {
  if(arr && arr instanceof Array && arr.length>0){
    return arr
  }else {
    return false
  }
};


const validateEmptyChar = (rule, value, callback) =>{
  if(isEmptyChar(value)){
    callback(new Error('禁止输入空值'));
  }else {
    callback();
  }
};
const validateSpecialChar = (rule, value, callback) => {
  if(isSpecialChar(value)){
    callback(new Error('禁止输入特殊字符'));
  }else {
    callback();
  }
};


/**
 * @param type{Object} 校验类型 ：max required number disableDefaultValidation
 * @param other {Array} 扩展校验规则
 */
const formRules=(type,other)=>{
  const rules = [];
  const {
    max, // 最大长度校验 {max:N}
    disableDefaultValidation = true, //是否禁用默认校验规则 默认 true
    required, //是否必填 默认 false
    number //是否为纯数字 默认 false
  } = type;
  if(!disableDefaultValidation){
    rules.push({
      validator:validateEmptyChar
    });
    rules.push({
      validator: validateSpecialChar
    })
  }
  if(required){
    rules.push({required,message:'必填项'})
  }
  if(number){
    rules.push({ type: 'number', message: '必须为数字值'}
    )}
  if(max){
    rules.push({max, message: `不能超过${max}个字符`},)
  }
  if(other && other instanceof Array){
    other.forEach(item=>{
      rules.push(item)
    })
  }
  return rules;
};
//将base64转换为文件对象
export const dataURLtoFile = (dataurl, filename) =>{
  let arr = dataurl.split(',');
  let mime = arr[0].match(/:(.*?);/)[1];
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, {type: mime});
};
// 导出
export const baseDownload = (value)=>{
  let { typeName , annxeContent } = value;
  let blob = dataURLtoFile(annxeContent,typeName);
  let b = new Blob([blob]);
  let url = URL.createObjectURL(b);
  let link = document.createElement('a');
  link.download = typeName;
  link.href = url;
  link.click();
};


export {
  formRules,
}
