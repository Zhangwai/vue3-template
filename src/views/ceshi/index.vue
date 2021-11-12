<template>
  <div style="height: 100%; overflow-y: auto">
    <!-- <el-image
      src="https://azalea-official.oss-cn-hangzhou.aliyuncs.com/image-1.jpg"
    /> -->
    <el-input type="text" v-focus />
    <div v-for="(item, index) in data" :key="index">
      <!-- <img v-imgLazy="item" alt="" /> -->
      <el-image :src="item" lazy></el-image>
    </div>
    <!-- <img
      v-imgLazy="
        'https://azalea-official.oss-cn-hangzhou.aliyuncs.com/image-1.jpg'
      "
      alt=""
    />
    <img
      v-imgLazy="
        'https://azalea-official.oss-cn-hangzhou.aliyuncs.com/image-2.png'
      "
      alt=""
    />
    <img
      v-imgLazy="
        'https://azalea-official.oss-cn-hangzhou.aliyuncs.com/image-3.jpg'
      "
      alt=""
    />
    <img
      v-imgLazy="
        'https://azalea-official.oss-cn-hangzhou.aliyuncs.com/image-4.jpg'
      "
      alt=""
    />
    <img
      v-imgLazy="
        'https://azalea-official.oss-cn-hangzhou.aliyuncs.com/image-10.jpg'
      "
      alt=""
    />
    <img
      v-imgLazy="
        'https://azalea-official.oss-cn-hangzhou.aliyuncs.com/image-5.png'
      "
      alt=""
    />
    <img
      v-imgLazy="
        'https://azalea-official.oss-cn-hangzhou.aliyuncs.com/image-12.jpg'
      "
      alt=""
    /> -->
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const data = ref([
      'https://azalea-official.oss-cn-hangzhou.aliyuncs.com/image-1.jpg',
      'https://azalea-official.oss-cn-hangzhou.aliyuncs.com/image-2.png',
      'https://azalea-official.oss-cn-hangzhou.aliyuncs.com/image-3.jpg',
      'https://azalea-official.oss-cn-hangzhou.aliyuncs.com/image-4.jpg',
      'https://azalea-official.oss-cn-hangzhou.aliyuncs.com/image-10.jpg',
      'https://azalea-official.oss-cn-hangzhou.aliyuncs.com/image-5.png',
      'https://azalea-official.oss-cn-hangzhou.aliyuncs.com/image-12.jpg'
    ])

    return { data }
  }
  // //局部使用
  // directives: {
  //   focus: {
  //     // 指令的定义
  //     mounted(el) {
  //       el.focus()
  //     }
  //   }
  // }
})
</script>

<style scoped lang="less">
img {
  display: block;
  width: 200px;
  height: 200px;
  padding: 0 0 500px 0;
}
.el-image {
  display: block;
  min-height: 200px;
  margin-bottom: 500px;
}
</style>
