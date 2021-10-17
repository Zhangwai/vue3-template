// const path = require('path')
const components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = {
  // 1.配置方式一：CLI提供的属性
  outputDir: './build',
  publicPath: '/', //这个必须，引入静态资源需要从根路径引入，否则会找不到静态资源
  // 解决跨域问题：在webpack设置devServer => proxy
  devServer: {
    proxy: {
      '^/api': {
        // 映射
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    },
    // history模式下的url会请求到服务器端，但是服务器端并没有这一个资源文件，就会返回404，所以需要配置这一项
    historyApiFallback: {
      index: '/index.html' //与output的publicPath
    }
  },
  // 2.配置方式二：和webpack配置合并
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    },
    plugins: [
      //手动
      // require('unplugin-element-plus/webpack')({
      //   // options
      // }),
      //全自动
      components({
        /* options */
        resolvers: [
          ElementPlusResolver({
            // importStyle: 'css'
          })
        ]
      })
    ]
  }

  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },

  // 3.配置方式三：
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // }
}
