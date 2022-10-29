<template>
  <div class="main-menu">
    <!--    logo   -->
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="" />
      <h2 class="title" v-show="!isExpandChange">vue3后台管理系统</h2>
    </div>
    <!--    menu  -->
    <div class="menu">
      <el-menu
        :default-active="defaultActive"
        class="el-menu"
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001529"
        :collapse="isExpandChange"
      >
        <template v-for="item in userMenu" :key="item.id">
          <el-sub-menu class="el-sub-menu" :index="item.id + ''">
            <template #title>
              <el-icon>
                <component :is="item.icon.split('-icon-')[1]"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="child in item.children" :key="child.id">
              <el-menu-item
                :index="child.id + ''"
                @click="handleMenuClick(child)"
              >{{ child.name }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>
<script setup lang="ts">
import useLoinStore from '@/stores/login'
import { defineProps, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { firstRoute, mapPathToRoute } from '@/utils/mapRoutesFn'

defineProps({
  isExpandChange: {
    type: Boolean,
    default: false
  }
})
//默认菜单
const loginStore = useLoinStore()
const userMenu = loginStore.userMenu
const defaultActive = ref(firstRoute.id + '')
const route = useRoute()
const value = mapPathToRoute(route.path, userMenu as any)
defaultActive.value = value.id + ''

//菜单跳转
interface IChildMenu {
  children: any[]
  id: number
  name: string
  parentId: number
  sort: number
  type: number
  url: string
}

const router = useRouter()

function handleMenuClick(child: IChildMenu) {
  router.push(child.url)
}
</script>
<style scoped lang="less">
.main-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    padding: 12px 30px 8px 20px;
    height: 28px;

    .img {
      width: 28px;
      margin: 0 auto;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      write-space: nowrap;
    }
  }

  .menu {
    .el-menu {
      border-right: none;
      user-select: none;

      .el-sub-menu {
        .el-menu-item {
          padding-left: 50px !important;
          background-color: #0c2135;
        }

        .el-menu-item:hover {
          color: #fff;
          background-color: #0e3051;
        }

        .el-menu-item.is-active {
          background-color: #334fae;
        }
      }
    }
  }
}
</style>
