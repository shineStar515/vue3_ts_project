<template>
  <div class="main-view">
    <el-container class="container">
      <el-aside class="el-aside" :width="!isExpandChange ? '240px' : '58px'">
        <!--    菜单    -->
        <el-scrollbar :min-size="0" style="margin: 0; padding: 0">
          <main-menu :isExpandChange="isExpandChange" />
        </el-scrollbar>
      </el-aside>
      <el-container class="container">
        <el-header style="padding: 0; margin: 0" height="50px">
          <!--    header    -->
          <main-header @expandChange="handleExpandChange" />
        </el-header>
        <el-main style="padding: 0; margin: 0">
          <!--    router    -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MainMenu from '@/components/main-menu/main-menu.vue'
import MainHeader from '@/components/main-header/main-header.vue'
import { ref } from 'vue'

const isExpandChange = ref(false)

function handleExpandChange(isExpand: boolean) {
  isExpandChange.value = isExpand
}
</script>

<style scoped lang="less">
.main-view {
  height: 100%;

  .container {
    margin: 0;
    padding: 0;
    height: 100%;

    .el-aside {
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      transition: width 0.3s linear;
    }
  }

  .el-scrollbar {
    height: 100%;
    background-color: #001529;
  }

  .el-scrollbar__wrap {
    overflow-x: hidden !important;
  }

  .el-select-dropdown .el-scrollbar {
    padding-bottom: 17px;
  }
}
</style>
