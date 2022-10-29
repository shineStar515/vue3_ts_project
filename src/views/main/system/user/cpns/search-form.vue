<template>
  <div class="search-form">
    <div class="search-content">
      <el-form
        ref="searchFormRef"
        :model="searchForm"
        label-width="100px"
        size="large"
      >
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="searchForm.name" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="手机号" prop="account">
              <el-input v-model="searchForm.account" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="真实姓名" prop="realName">
              <el-input v-model="searchForm.realName" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="状态">
              <el-select
                v-model="searchForm.status"
                class="m-2"
                placeholder="Select"
                size="large"
              >
                <el-option :value="1" label="启用" />
                <el-option :value="2" label="禁用" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="时间">
              <el-date-picker
                v-model="searchForm.time"
                :size="large"
                end-placeholder="结束时间"
                range-separator="-"
                start-placeholder="开始时间"
                type="daterange"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="search-btn">
      <el-button :icon="RefreshLeft" size="large" @click="handleRefreshClick"
      >重置
      </el-button>
      <el-button :icon="Search" size="large" type="primary">搜素</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { RefreshLeft, Search } from '@element-plus/icons-vue'
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'

const searchFormRef = ref<InstanceType<typeof ElForm>>()
const searchForm = reactive({
  name: '',
  account: '',
  realName: '',
  status: 0,
  time: []
})

//重置
function handleRefreshClick() {
  searchFormRef.value?.resetFields()
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
