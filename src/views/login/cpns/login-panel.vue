<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <!--    Tabs-->
    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="activeName">
        <el-tab-pane name="account">
          <template #label>
            <div class="label">
              <el-icon class="icon">
                <User />
              </el-icon>
              <span class="text">帐号登录</span>
            </div>
          </template>
          <div class="content">
            <!--            帐号登录-->
            <panel-account ref="accountRef" />
          </div>
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <div class="label">
              <el-icon class="icon">
                <Iphone />
              </el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>
          <div class="content">
            <!--            手机登录-->
            <panel-phone ref="phoneRef" />
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!--    control-->
    <div class="control-account">
      <el-checkbox v-model="isRememberPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <!--    login-->
    <el-button
      class="login-btn"
      type="primary"
      size="large"
      @click="handleLoginClick"
    >登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import PanelAccount from '@/views/login/cpns/panel-account.vue'
import PanelPhone from '@/views/login/cpns/panel-phone.vue'
import { ref } from 'vue'
/* data */
const isRememberPwd = ref(false)
const activeName = ref('account')
const accountRef = ref<any>()
const phoneRef = ref<any>()

/* 登录 */
function handleLoginClick() {
  if (activeName.value === 'account') {
    accountRef.value?.accountLoginAction()
  } else {
    phoneRef.value?.accountLoginAction()
  }
}
</script>

<style scoped lang="less">
.login-panel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .tabs {
    padding: 5px;

    .label {
      display: flex;
      justify-content: center;
      align-items: center;

      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 5px;

        .text {
          margin-right: 10px;
        }
      }
    }
  }

  .control-account {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
