<template>
  <div class="user">
    <h2>用户管理</h2>
    <search-form />
    <table-form />
  </div>
</template>

<script lang="ts" setup>
import SearchForm from '@/views/main/system/user/cpns/search-form.vue'
import TableForm from '@/views/main/system/user/cpns/table-form.vue'
import useSystemStore from '@/stores/main/system'

const systemStore = useSystemStore()
systemStore.postUsersListAction()
</script>

<style scoped></style>
