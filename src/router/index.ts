import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

interface IMenubarList {
  parentId?: number | string
  id?: number | string
  name: string
  path: string
  redirect?: string | {name: string}
  meta: {
      icon: string
      title: string
      permission?: string[]
      activeMenu?: string // 路由设置了该属性，则会高亮相对应的侧边栏
      noCache?: boolean // 页面是否不缓存
      hidden?: boolean // 是否隐藏路由
      alwaysShow?: boolean // 当子路由只有一个的时候是否显示当前路由
  }
  component: (() => Promise<typeof import('*.vue')>) | string
  children?: Array<IMenubarList>
}

export const allowRouter:Array<IMenubarList> = [
  {
    name: 'Dashboard',
    path: '/',
    meta: { title: '仪表盘', icon: 'el-icon-eleme' },
    component: (() => import('@/layout/index.vue')) as unknown as () => Promise<typeof import('*.vue')>
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes: allowRouter as RouteRecordRaw[]
})

export default router