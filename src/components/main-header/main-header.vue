<template>
  <div class="main-header">
    <div class="icon">
      <el-icon size="28px" @click="handleIconClick">
        <component :is="isExpand ? 'Expand' : 'Fold'"></component>
      </el-icon>
    </div>
    <div class="content">
      <div class="breadcrumb">
        <header-bread />
      </div>
      <div class="info">
        <header-info />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import HeaderInfo from '@/components/main-header/cpns/header-info.vue'
import HeaderBread from '@/components/main-header/cpns/header-bread.vue'

const emit = defineEmits(['expandChange'])
const isExpand = ref(false)

function handleIconClick() {
  isExpand.value = !isExpand.value
  emit('expandChange', isExpand.value)
}
</script>
<style scoped lang="less">
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  .icon {
    width: 50px;
  }

  .content {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
