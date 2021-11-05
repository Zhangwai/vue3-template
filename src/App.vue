<template>
  <div id="nav">
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/login">Login</router-link> |
    <div @click="gotoLogin()">router push 跳转</div>
  </div>
  <!-- <router-view /> -->
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <component :is="Component" :key="route.path" />
      </keep-alive>
    </transition>
  </router-view>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'App',
  setup() {
    // const route = useRoute()
    const router = useRouter()
    const gotoLogin = () => {
      router.push({
        path: '/login'
      })
    }
    return {
      gotoLogin
    }
  }
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
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
