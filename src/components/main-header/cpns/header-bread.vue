<template>
  <div class="header-bread">
    <el-breadcrumb separator="/">
      <template v-for="menu in menuPath" :key="menu.name">
        <el-breadcrumb-item :to="menu.path">{{ menu.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router'
import useLoinStore from '@/stores/login'
import { mapPathToBread } from '@/utils/mapRoutesFn'
import { computed } from 'vue'

const route = useRoute()
const userMenu = useLoinStore().userMenu
const menuPath = computed(() => {
  return mapPathToBread(route.path, userMenu as any)
})
</script>
<style scoped></style>
