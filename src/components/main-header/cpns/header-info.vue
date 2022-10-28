<template>
  <div class="header-info">
    <div class="info">
      <span>
        <el-icon size="20px">
          <Bell />
        </el-icon>
      </span>
      <span>
        <el-icon size="20px">
          <ChatLineRound />
        </el-icon>
      </span>
      <span>
        <el-icon size="20px">
          <Message />
        </el-icon>
      </span>

      <el-dropdown style="display: flex">
        <span class="el-dropdown-link">
          <div class="avatar">
            <el-avatar
              size="10"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
          </div>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleLogoutClick"
            >退出系统
            </el-dropdown-item>
            <el-dropdown-item divided>个人信息</el-dropdown-item>
            <el-dropdown-item divided>修改密码</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup lang="ts">
import { localCache } from '@/utils/cache'
import { useRouter } from 'vue-router'

const router = useRouter()

function handleLogoutClick() {
  localCache.remove('token')
  router.push('/login')
}
</script>
<style scoped lang="less">
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}

.header-info {
  width: 200px;
  margin-right: 20px;
  display: inline-flex;

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
    width: 40px;
    height: 35px;

    span {
      margin: 10px;
    }
  }
}
</style>
