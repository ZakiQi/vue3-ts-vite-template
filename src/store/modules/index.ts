import { defineStore } from 'pinia'
import { Ilayout } from '@/type/store/layout'
import { getRouterList } from '@/api/layout'

export const useLayoutStore = defineStore({
  id: 'layout',
  state: ():Ilayout => ({
    userInfo: {
      name: '',
      role: []
    }
  }),

  getters: {

  },

  actions: {
    async GenerateRoutes():Promise<void>{
      const res = await getRouterList()
      console.log(res, 'res')
    }
  }
})