<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="username">
        <el-input v-model="account.username" placeholder="coderwhy" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <!-- show-password隐藏密码 -->
        <el-input
          v-model="account.password"
          show-password
          placeholder="123456"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { ElForm } from 'element-plus'
import { rules } from '../config/account-config'
import { useStore } from 'vuex'
import localCache from '@/utils/cache'

export default defineComponent({
  setup() {
    // ref只可以监听简单数据，reactive可以监听所有数据、
    const account = reactive({
      username: '',
      password: ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const store = useStore()
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 判断是否需要记录密码
          if (isKeepPassword) {
            localCache.setCache('name', account.username)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          console.log(isKeepPassword)
          store.dispatch('loginModule/accountLoginAction', { ...account })
        }
      })
    }
    return {
      account,
      rules,
      formRef,
      loginAction
    }
  }
})
</script>

<style scoped lang="less"></style>
