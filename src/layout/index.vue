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
                <el-sub-menu index="1">
                  <template #title>
                    <el-icon><location /></el-icon>
                    <span>Navigator One</span>
                  </template>
                  <el-menu-item-group>
                    <template #title><span>Group One</span></template>
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                  </el-menu-item-group>
                  <el-sub-menu index="1-4">
                    <template #title><span>item four</span></template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                  </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="2">
                  <el-icon><icon-menu /></el-icon>
                  <template #title>Navigator Two</template>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                  <el-icon><document /></el-icon>
                  <template #title>Navigator Three</template>
                </el-menu-item>
                <el-menu-item index="4">
                  <el-icon><setting /></el-icon>
                  <template #title>Navigator Four</template>
                </el-menu-item>
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
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { useLayoutStore } from '@/store/modules'
const { GenerateRoutes } = useLayoutStore()

const status: number = 1

// 菜单开关
const isCollapse =  ref(false)
const handleOpen = (key:string, keyPath: string) => {
  console.log(key, keyPath)
}
const handleClose = (key:string, keyPath: string) => {
  console.log(key, keyPath)
}

const route = GenerateRoutes()
console.log(route, 'routerouterouteroute')

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