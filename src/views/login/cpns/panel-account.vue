<template>
  <div class="panel-account">
    <el-form
      :model="formLabelAccount"
      :rules="accountRules"
      ref="formRef"
      label-width="76px"
      size="large"
      status-icon
    >
      <el-form-item label="帐号:" required prop="accountValue">
        <el-input v-model="formLabelAccount.accountValue" />
      </el-form-item>
      <el-form-item label="密码:" required prop="accountPwd">
        <el-input v-model="formLabelAccount.accountPwd" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import type { FormRules, ElForm } from 'element-plus'

import { ref, reactive, defineExpose } from 'vue'
import { ElMessage } from 'element-plus'
import useLoinStore from '@/stores/login'
/* data */
const formLabelAccount = reactive({
  accountValue: '',
  accountPwd: ''
})
/* 校验规则 */
const accountRules: FormRules = {
  accountValue: [
    { required: true, message: '账号不可以为空', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,10}$/,
      message: '必须由6 - 10位数字和字母组成',
      trigger: 'blur'
    }
  ],
  accountPwd: [
    { required: true, message: '密码不可以为空', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: '必须是6位以上数字和字母组成',
      trigger: 'blur'
    }
  ]
}

/* 登录 */
const formRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useLoinStore()

function accountLoginAction() {
  formRef.value?.validate((valid) => {
    if (valid) {
      const name = formLabelAccount.accountValue
      const password = formLabelAccount.accountPwd
      loginStore.loginAccountAction({ name, password })
    } else {
      ElMessage({
        showClose: true,
        message: '请您输入正确的格式',
        type: 'warning'
      })
    }
  })
}

defineExpose({
  accountLoginAction
})
</script>
<style scoped></style>
