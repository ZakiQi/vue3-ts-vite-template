export interface IUserInfo {
  name: string,
  role: string[]
}



export interface Ilayout {
  menubar: any,
  userInfo: IUserInfo,
  testUserInfo?: Array<IMenubarList>
}

export interface IMenubarList {
  parentId?: number | string
  id?: number | string
  name: string
  path: string
  redirect?: string | {name: string}
  meta: {
    title: string
    icon?: string
    permission?: string[]
    activeMenu?: string // 路由设置了该属性，则会高亮相对应的侧边栏
    noCache?: boolean // 页面是否不缓存
    hidden?: boolean // 是否隐藏路由
    alwaysShow?: boolean // 当子路由只有一个的时候是否显示当前路由
  }
  component?: (() => Promise<typeof import('*.vue')>) | string
  children?: Array<IMenubarList>
}
