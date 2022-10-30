<template>
  <div class="search-form">
    <div class="search-content">
      <search-form v-model="formData" :search-form-config="formArrData" />
    </div>
    <div class="search-btn">
      <el-button :icon="RefreshLeft" size="large" @click="handleResetClick"
      >重置
      </el-button>
      <el-button
        :icon="Search"
        size="large"
        type="primary"
        @click="handleQueryClick"
      >搜素
      </el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { RefreshLeft, Search } from '@element-plus/icons-vue'

import { ref, defineProps } from 'vue'
import SearchForm from '@/base-ui/page-search/cpns/search-form.vue'

const props = defineProps({
  searchFormConfig: {
    type: Object,
    default: () => {
    }
  }
})
/*父组件传值*/
const emits = defineEmits(['resetBtnClick', 'queryBtnClick'])
const formArrData = ref(props.searchFormConfig.searchForms)
/*form数据响应式*/
const formList: any = {}
for (const formItem of props.searchFormConfig.searchForms) {
  formList[formItem.field] = ''
}
const formData = ref(formList)
// 2.当用户点击重置
const handleResetClick = () => {
  formData.value = formList
  emits('resetBtnClick')
}

// 3.当用户点击搜索
const handleQueryClick = () => {
  emits('queryBtnClick', formData.value)
}
</script>
<style lang="less" scoped>
.search-form {
  padding: 40px;

  .search-btn {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
  }
}
</style>
