<template>
  <div class="panel-phone">
    <el-form
      :model="formLabelPhone"
      :rules="phoneRules"
      label-width="76px"
      size="large"
    >
      <el-form-item label="手机号:" required prop="phoneValue">
        <el-input v-model="formLabelPhone.phoneValue" />
      </el-form-item>
      <el-form-item label="验证码:" required prop="phoneCode">
        <el-input v-model="formLabelPhone.phoneCode" />
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { defineExpose, reactive } from 'vue'
import type { FormRules } from 'element-plus'
/* data */
const formLabelPhone = reactive({
  phoneValue: '',
  phoneCode: ''
})
/* 校验规则 */
const phoneRules: FormRules = {
  phoneValue: [
    { required: true, message: '手机号不可以为空', trigger: 'blur' },
    {
      pattern:
        /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
      message: '你输入的手机号格式错误',
      trigger: 'blur'
    }
  ],
  phoneCode: [{ required: true, message: '验证码不可以为空', trigger: 'blur' }]
}

/* 登录 */
function phoneLoginAction() {
  console.log('手机登录')
}

defineExpose({
  phoneLoginAction
})
</script>
<style scoped></style>
