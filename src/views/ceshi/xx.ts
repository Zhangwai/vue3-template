// Exclude<T, U> - 用于从类型T中去除不在U类型中的成员
type xx = 'a' | 'b' | 'd' | 'c'
type exclude = Exclude<xx, 'b' | 'c'>

// Extract<T, U> - 用于从类型T中取出可分配给U类型的成员
type extract = Extract<xx, 'b' | 'c'>

// 可以这样去拿到一个函数的返回值去定义一个参数
const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
  console.log(1)
}, 10000)

clearTimeout(timer)
