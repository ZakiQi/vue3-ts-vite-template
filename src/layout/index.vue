<template>
  <div class="layout">
    <!-- mock层 用于loading... -->
    <div class="layout-sidebar-mask" :class='{"hidden": status !== 2 }'></div>
    <div class="layout-container">
      <el-container>
        <el-aside class="layout-sidebar h-screen">
          <div class="layout-sidebar-logo">
            <span>LOGO</span>
          </div>
          
          <el-scrollbar>
            <div class="layout-sidebar-menubar">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                :collapse="isCollapse"
                :unique-opened="true"
                @open="handleOpen"
                @close="handleClose"
              >
                <menubarItem  v-for="item in menubar" :meneList="item" :key="item.id"></menubarItem>
              </el-menu>
            </div>
          </el-scrollbar>
        </el-aside>

        <!-- 主体部分 -->
        <el-container>
          <el-main class="layout-sidebar-main">Main</el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch, nextTick } from 'vue'
import { useLayoutStore } from '@/store/modules'
import menubarItem from '@/components/layout/menubarItem.vue'
import { IMenubarList } from '@/type/store/layout'
import { storeToRefs } from 'pinia'

const useLayout = useLayoutStore()
const { menubar } = storeToRefs(useLayout)
const status: number = 1

// 菜单开关
const isCollapse =  ref(false)
const handleOpen = (key:string, keyPath: string) => {
  console.log(key, keyPath)
}
const handleClose = (key:string, keyPath: string) => {
  console.log(key, keyPath)
}

let route:IMenubarList[] = reactive([])
// 获取菜单
useLayout.GenerateRoutes()

</script>

<style lang="scss">
.layout{
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .layout-sidebar-mask{
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.25);
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
  }

  .hidden{
    display: none;
  }

  .layout-container{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
  }

  .layout-sidebar{
    display: flex;
    flex-direction: column;
    border-right: 1px solid #ccc;
  }

  .layout-sidebar{
    width: 16rem;
  }

  .layout-sidebar-logo{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    height: 48px;
    background: #001529;

    & span{
      color: #fff;
    }
  }

  .layout-sidebar-menubar{
    flex: 1;
    overflow: auto;
  }

  .layout-sidebar-main{
    flex: 1;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    border-right: none
  }
}

</style>