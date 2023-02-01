import request from '@/utils/request'
import { AxiosResponse } from 'axios'
import { IMenubarList } from '@/type/store/layout'

export function getRouterList():Promise<AxiosResponse<IMenubarList>>{
  return request({
    url: '/getRoute',
    method: 'get'
  })
} 