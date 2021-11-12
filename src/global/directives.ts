import { useIntersectionObserver } from '@vueuse/core'

import { App } from 'vue'
import defaultImage from '@/assets/img/logo.svg'

const myDirective = {
  install(app: App) {
    // 自定义指令
    app.directive('imgLazy', {
      mounted(el, binding) {
        console.log(el, binding, 'imgLazy')
        el.src = defaultImage
        const { stop } = useIntersectionObserver(
          el, // target 是vue的对象引用。是观察的目标
          // isIntersecting 是否进入可视区域，true是进入 false是移出
          // abserveDom 被观察的dom
          ([{ isIntersecting }], abserveDom) => {
            if (isIntersecting) {
              // 1. 停止观察
              stop()
              // 2. 后续的操作
              // 给dom元素设置src属性值
              el.src = binding.value
              el.onerror = () => {
                el.src = defaultImage
              }
            }
          },
          // threshold为可视区域的比值，默认为1/10
          // 当前元素在页面中显示比值小于1/10时会出现白屏
          { threshold: 0 }
        )
      }
    })
    app.directive('focus', (el, binding) => {
      console.log(el.children[0], '聚焦', el.nodeName)
      if (el.nodeName !== 'INPUT') {
        console.log('现在的el不是input')
        el = el.children[0]
      }
      el.focus()
    })
  }
}

export default myDirective
