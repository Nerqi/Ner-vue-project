module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  rules: {
    /*
    'off'或者0    //关闭规则关闭
    'warn'或者1    //在打开的规则作为警告（不影响退出代码）
    'error'或者2    //把规则作为一个错误（退出代码触发时为1）
    */
    'strict': 'off', // 使用严格模式
    'indent': 'off', // 缩进风格
    'space-before-function-paren': 'off', // 函数定义时括号前面要不要有空格
    'generator-star-spacing': 'off', // 生成器函数*的前后空格
    'no-debugger': 'error', // 禁止使用debugger
    'no-undef': 'off', // 不能有未定义的变量
    'camelcase': 'off', // 强制驼峰法命名
    'semi': 'off', // 必须要有分号
    "vue/max-attributes-per-line": 'off',
    'vue/singleline-html-element-content-newline': 'off', // 在单行元素的内容前后需要换行符
    'vue/html-self-closing': 'off', // 标签自闭和
    'attributes-order': 'off',
    'order-in-components': 'off',
    'html-closing-bracket-newline': 'off',
  }
};
