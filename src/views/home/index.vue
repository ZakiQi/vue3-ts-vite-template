<template>
  <myHeader :menuInfo="menuInfo"></myHeader>
  <div>
    <!-- 12312312 -->
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import myHeader from '@/components/home/my-header.vue'

// interface Menu {
//   name: string,
//   id: Number | string
// }

const menuInfo: {
  name: string,
  id: number | string
}[] = reactive([
  {
    name: '首页',
    id: 'home'
  }, {
    name: '关于',
    id: 'about'
  }
])
</script>
