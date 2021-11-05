<template>
  <div>
    login
    <el-button>12312</el-button>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
// import { ElButton } from 'element-plus'
import uuRequest from '@/service'

export default defineComponent({
  // components: {
  //   ElButton
  // },
  setup() {
    // TODELETE控制单独有拦截
    uuRequest
      .request({
        url: '/home/multidata',
        method: 'get',

        interceptors: {
          requestInterceptor: (config) => {
            console.log('solo request')
            return config
          },
          responseInterceptor: (res) => {
            console.log('solo responese')
            return res
          }
        }
      })
      .then((res) => {
        console.log(res)
      })
    return {}
  }
})
</script>
<style scoped>
div {
  color: aquamarine;
}
</style>
