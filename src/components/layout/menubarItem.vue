<template>
  <el-sub-menu index="1">
    <template #title>
      <el-icon><location /></el-icon>
      <span>{{ meneList.name }}</span>
    </template>
    
    <!-- <el-menu-item-group>
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
    </el-sub-menu> -->
  </el-sub-menu>
</template>


<script lang="ts">
import { defineComponent, PropType, watch } from 'vue'
import { IMenubarList } from '@/type/store/layout'
// import {
//   Document,
//   Menu as IconMenu,
//   Location,
//   Setting,
// } from '@element-plus/icons-vue'

export default defineComponent({
  name: 'MenubarItem',

  props: {
    meneList: {
      type:  Object as PropType<IMenubarList>,
        default: () => {return {}}
    }
  },

  

  setup(props) {
    watch(
      () => props.meneList,
      (data) => {
        console.log(data)
      }, 
      { immediate: true }
    )

    return {
      
    }
  },
})
</script>