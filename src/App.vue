<template>
  <ElConfigProvider :locale='locale'>
    <router-view />
  </ElConfigProvider>
</template>

<script setup lang="ts">
import locale from 'element-plus/lib/locale/lang/zh-cn'
import { ElConfigProvider } from 'element-plus'

</script>

<style scoped>
</style>
