<template>
  <div class="table-form">
    <div class="table-header">
      <h2>用户列表</h2>
      <el-button size="large" type="primary">新建用户</el-button>
    </div>
    <div class="table-content"></div>
    <div class="table-page">分页</div>
  </div>
</template>

<style lang="less" scoped>
.table-form {
  padding: 40px;

  .table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
