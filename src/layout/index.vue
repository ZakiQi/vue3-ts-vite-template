<template>
  <div class="layout">
    <!-- mock层 用于loading... -->
    <div class="layout-sidebar-mask" :class='{"hidden": status !== 2 }'></div>
    <el-container>
      
    </el-container>
    <div class="layout-sidebar"></div>
    12312312
  </div>
</template>

<script setup lang="ts">
const status: number = 1
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
}

</style>