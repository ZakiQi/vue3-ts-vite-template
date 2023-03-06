import { defineStore } from 'pinia'
import { Ilayout, IMenubarList } from '@/type/store/layout'
import { getRouterList } from '@/api/layout'
// import { reactive, ref } from 'vue'

export const useLayoutStore = defineStore({
  id: 'layout',
  state: ():Ilayout => ({
    menubar: [],
    userInfo: {
      name: '',
      role: []
    },
    testUserInfo: [
      {
        id: '1',
        name: '工作台',
        path: '/',
        meta: {
          title: '工作台'
        }
      }
    ]
  }),

  getters: {
    getMenubar(): Array<IMenubarList>{
      return this.menubar
    }
  },

  actions: {
    setRoutes(data: Array<IMenubarList>):void{
      this.menubar = data
    },

    async GenerateRoutes():Promise<Array<IMenubarList>>{
      const routeInfo:any = await getRouterList() // mockjs
      this.setRoutes(routeInfo)
      return  Promise.resolve(this.menubar)
    }
  }
})