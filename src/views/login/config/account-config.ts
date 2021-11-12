// 编写规则
export const rules = {
  // 对应name
  username: [
    // 规则一
    {
      required: true, //必传
      message: '账号是必须写的', //错误时显示
      trigger: 'blur' //失去焦点时检测，change只要改变就检测
    },
    // 规则二
    {
      pattern: /^[a-zA-Z0-9]{5,11}$/, //正则，a-z 0-9 五位到十一位
      message: '用户名必须是5~11个字母或数字',
      trigger: 'blur'
    }
  ],
  // 对应password
  password: [
    {
      required: true, //必传
      message: '密码是必须写的', //错误时显示
      trigger: 'blur' //失去焦点时检测，change只要改变就检测
    },
    {
      pattern: /^[a-zA-Z0-9]{6,}$/, //正则，a-z 0-9 六位以上
      message: '密码必须是6个以上字母或数字',
      trigger: 'blur'
    }
  ]
}
