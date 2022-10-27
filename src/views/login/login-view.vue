<template>
  <div class="login-view">
    <login-panel></login-panel>
  </div>
</template>

<script setup lang="ts">
import LoginPanel from '@/views/login/cpns/login-panel.vue'
</script>
<style lang="less" scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
