import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import { IMenubarList } from 'src/type/store/layout'

export const allowRouter:Array<IMenubarList> = [
  {
    name: 'Dashboard',
    path: '/',
    meta: { title: '仪表盘', icon: 'el-icon-eleme' },
    component: (() => import('@/layout/index.vue')) as unknown as () => Promise<typeof import('*.vue')>
  },
  {
    name: '404',
    path: '/404',
    meta: { title: '404', icon: 'el-icon-eleme'},
    component: (() => import('@/views/ErrorPage/404.vue'))
  },
  {
    name: 'error',
    path: '/:pathMatch(.*)',
    meta: { title: '404' },
    redirect: '404'
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes: allowRouter as RouteRecordRaw[]
})

export default router