<!-- 头部 Menu -->
<template>
  <div class="q-menu">
    <div class="q-wrap">
      <div class="q-table"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

interface menuType {
  name: string,
  id: number | string
}[]

const Prop = defineProps<{
  menuInfo: {
    type: Object,
    default: () => []
  }
}>()

console.log(Prop.menuInfo, 'menuInfo')
</script>

<style lang="scss">
.q-menu{
  height: 118px;
  width: 100%;
  padding-top: 10px;

  .q-wrap{
    padding: 0 40px;
    margin: 0 auto;
    height: 100%;
  }

  .q-table{
    width: 100%;
    margin: 0 auto;
    border: 1px solid red;
    height: 100%;
  }
}
</style>