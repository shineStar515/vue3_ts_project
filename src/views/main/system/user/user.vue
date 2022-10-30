<template>
  <div class="user">
    <page-search
      :search-form-config="searchFormConfig"
      @queryBtnClick="handelQueryClick"
    />
  </div>
</template>

<script lang="ts" setup>
import useSystemStore from '@/stores/main/system'
import PageSearch from '@/base-ui/page-search/page-search.vue'
import { searchFormConfig } from './config/pageSearch.config'

function handelQueryClick(value: any) {
  console.log(value)
}

const systemStore = useSystemStore()
systemStore.postUsersListAction()
</script>

<style scoped></style>
