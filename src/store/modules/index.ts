import { defineStore } from 'pinia'
import { Ilayout, IMenubarList } from '@/type/store/layout'
import { getRouterList } from '@/api/layout'

export const useLayoutStore = defineStore({
  id: 'layout',
  state: ():Ilayout => ({
    menubar: [],
    userInfo: {
      name: '',
      role: []
    }
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

    async GenerateRoutes():Promise<void>{
      const routeInfo:any = await getRouterList()
      this.setRoutes(routeInfo)
      console.log(this.menubar, this.userInfo)
    }
  }
})