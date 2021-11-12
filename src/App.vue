<template>
  <div id="app">
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

// 从js角度来说没啥作用,从ts角度来讲可以做类型推导
export default defineComponent({
  name: 'App',
  setup() {
    return {}
  }
})
</script>

<style lang="less">
#app {
  height: 100%;
}
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.25s ease-in;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-active {
  transition: all 0.25s ease-in;
}

.fade-leave-to {
  opacity: 0;
}
</style>
